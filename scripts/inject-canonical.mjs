#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs"
import { execSync } from "node:child_process"

const files = execSync("find app -name page.tsx", { encoding: "utf8" })
  .trim()
  .split("\n")

let updated = 0
let skippedDynamic = 0
let skippedAlready = 0
let skippedDev = 0
let skippedRoot = 0
let skippedNoMeta = 0
let addedMeta = 0

for (const file of files) {
  if (file.includes("%5Fdev")) {
    skippedDev++
    continue
  }
  if (file === "app/page.tsx") {
    // canonical "/" already set in root layout
    skippedRoot++
    continue
  }

  const isDynamic = /\[.+\]/.test(file)
  let route = file.replace(/^app/, "").replace(/\/page\.tsx$/, "")
  if (!route) route = "/"

  const src = readFileSync(file, "utf8")

  if (src.includes("alternates:") && src.includes("canonical:")) {
    skippedAlready++
    continue
  }

  if (isDynamic) {
    // dynamic routes need generateMetadata — handle separately
    skippedDynamic++
    continue
  }

  // Find `export const metadata: Metadata = {` then inject after the opening brace
  const re = /export const metadata\s*:\s*Metadata\s*=\s*\{/
  const match = src.match(re)
  if (!match) {
    skippedNoMeta++
    continue
  }

  const insertPos = match.index + match[0].length
  const before = src.slice(0, insertPos)
  const after = src.slice(insertPos)
  // Detect if existing block is single-line vs multi-line by looking at next non-space char
  const isMultiline = /^\s*\n/.test(after)
  const injection = isMultiline
    ? `\n  alternates: { canonical: "${route}" },`
    : ` alternates: { canonical: "${route}" },`

  writeFileSync(file, before + injection + after)
  updated++
}

console.log({
  updated,
  skippedAlready,
  skippedDynamic,
  skippedDev,
  skippedRoot,
  skippedNoMeta,
  addedMeta,
})
