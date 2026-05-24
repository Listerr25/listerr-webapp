import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import type { ReactNode } from "react"

import { BreadcrumbBar } from "@/components/site/breadcrumb-bar"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteNav } from "@/components/site/site-nav"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://listerr.in"),
  title: {
    default: "Listerr — India's Most Complete Commerce Engagement Platform",
    template: "%s — Listerr",
  },
  description:
    "Stories, Reels, AI Ordering, and Smart Flows in one commerce engagement platform built for Indian brands.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <SiteNav />
        <BreadcrumbBar />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
