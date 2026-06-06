#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs"
import { execSync } from "node:child_process"

const files = execSync("find app -name page.tsx", { encoding: "utf8" })
  .trim()
  .split("\n")

let updated = 0
let skipped = 0

for (const file of files) {
  if (file.includes("%5Fdev")) {
    skipped++
    continue
  }
  if (/\[.+\]/.test(file)) {
    // dynamic routes already use generateMetadata with full blocks
    skipped++
    continue
  }

  let route = file.replace(/^app/, "").replace(/\/page\.tsx$/, "")
  if (!route) route = "/"

  const src = readFileSync(file, "utf8")

  if (src.includes("openGraph:") || src.includes("twitter:")) {
    skipped++
    continue
  }

  // Find metadata block: `export const metadata: Metadata = {` … matching `}`
  const startRe = /export const metadata\s*:\s*Metadata\s*=\s*\{/
  const m = src.match(startRe)
  if (!m) {
    skipped++
    continue
  }

  const startIdx = m.index
  const bodyStart = m.index + m[0].length

  // Walk braces to find closing
  let depth = 1
  let inStr = null
  let i = bodyStart
  for (; i < src.length; i++) {
    const c = src[i]
    const prev = src[i - 1]
    if (inStr) {
      if (c === inStr && prev !== "\\") inStr = null
      continue
    }
    if (c === '"' || c === "'" || c === "`") {
      inStr = c
      continue
    }
    if (c === "{") depth++
    else if (c === "}") {
      depth--
      if (depth === 0) break
    }
  }
  if (depth !== 0) {
    console.warn(`unbalanced braces: ${file}`)
    skipped++
    continue
  }
  const closeIdx = i

  const body = src.slice(bodyStart, closeIdx)

  // Pull title field — handles either "title: \"...\"" or "title: { default: \"...\" }" (skip template form)
  const titleMatch =
    body.match(/title\s*:\s*"((?:[^"\\]|\\.)*)"/) ||
    body.match(/title\s*:\s*`((?:[^`\\]|\\.)*)`/)
  const descMatch =
    body.match(/description\s*:\s*"((?:[^"\\]|\\.)*)"/) ||
    body.match(/description\s*:\s*`((?:[^`\\]|\\.)*)`/)

  if (!titleMatch || !descMatch) {
    skipped++
    continue
  }

  const title = titleMatch[1]
  const desc = descMatch[1]

  const og = `
  openGraph: {
    url: "${route}",
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(desc)},
  },
  twitter: {
    card: "summary_large_image",
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(desc)},
  },`

  // Inject just before closing brace
  // Ensure preceding content ends with comma or newline
  const before = src.slice(0, closeIdx)
  const after = src.slice(closeIdx)
  const trimmedBefore = before.replace(/\s*$/, "")
  const needsComma = !trimmedBefore.endsWith(",") && !trimmedBefore.endsWith("{")
  const injection = (needsComma ? "," : "") + og + "\n"

  writeFileSync(file, trimmedBefore + injection + after)
  updated++
}

console.log({ updated, skipped })
