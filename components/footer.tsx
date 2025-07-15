import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Logo className="h-8 w-auto" />
              <span className="sr-only">Listerr</span>
            </Link>
            <p className="text-blue-200 mb-6 max-w-md">
              An AI-powered commerce network using Generative AI and social commerce to attract consumers via Google My
              Business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-blue-200 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Listerr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
