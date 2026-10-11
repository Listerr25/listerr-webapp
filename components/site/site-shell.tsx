"use client"

import type { ReactNode } from "react"
import { SiteNav } from "@/components/site/site-nav"
import { BreadcrumbBar } from "@/components/site/breadcrumb-bar"
import { SiteFooter } from "@/components/site/site-footer"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <BreadcrumbBar />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  )
}
