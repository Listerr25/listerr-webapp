"use client"

import Link from "next/link"
import Logo from "./logo"

export default function Nav() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
          <span className="sr-only">Listerr</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-gray-600">
            <a
              href="https://listerr.networks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 transition-colors"
            >
              NETWORK
            </a>
            <Link href="/seller" className="hover:text-primary-600 transition-colors">
              FOR SELLER
            </Link>
            <Link href="#waitlist" className="hover:text-primary-600 transition-colors">
              WAITLIST
            </Link>
          </div>

          <a
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScY4HCm8fY3zJjjh0119wuQ6oszK46nMy1sR69mtR0N8ZISDA/viewform",
                "_blank",
              )
            }
            className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors cursor-pointer"
          >
            GET EARLY ACCESS
          </a>
        </div>
      </div>
    </nav>
  )
}
