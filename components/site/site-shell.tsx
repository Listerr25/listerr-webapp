"use client"

import type { ReactNode } from "react"
import { V2Nav } from "@/components/v2/v2-nav"
import { V2Footer } from "@/components/v2/v2-footer"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-fg">
      <V2Nav />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <V2Footer />
    </div>
  )
}
