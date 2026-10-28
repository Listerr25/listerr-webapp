import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react"

export function V2Footer() {
  return (
    <footer className="border-t border-blue-900/30 bg-slate-950 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Contact & Support Ribbon (Listerr Blue Accent) */}
        <div className="rounded-2xl border border-blue-800/40 bg-gradient-to-r from-blue-950/80 via-slate-900 to-blue-950/80 p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg px-2.5 py-1 inline-flex items-center shadow-xs">
                <Image
                  src="/images/listerr-logo-horizontal.svg"
                  alt="Listerr Logo"
                  width={110}
                  height={24}
                  className="h-5 w-auto object-contain"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                Direct Support & Sales Desk · Jaipur HQ
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to deploy the Listerr 360 loop in your stores?
            </h4>
            <p className="text-sm text-blue-100/80">
              Speak directly with our technical team in Jaipur or get an official quote with dispatch timelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20to%20inquire%20about%20deploying%20Listerr%20360"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2.5 text-xs sm:text-sm transition shadow-lg shadow-blue-600/30"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919145989198"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 text-xs sm:text-sm transition border border-white/10"
            >
              <Phone className="h-4 w-4 text-blue-300" />
              +91 91459 89198
            </a>
          </div>
        </div>

        {/* 5-Column Sitemap Navigation (§21) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10 text-xs">
          {/* Column 1: E-commerce */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">01 E-commerce</p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/ecommerce#catalogs" className="hover:text-white transition">Shoppable Catalogs</Link></li>
              <li><Link href="/ecommerce#qr-ordering" className="hover:text-white transition">QR In-Store Ordering</Link></li>
              <li><Link href="/ecommerce#online-store" className="hover:text-white transition">0% Commission Store</Link></li>
              <li><Link href="/ecommerce#social-commerce" className="hover:text-white transition">Social Drops & Sharing</Link></li>
              <li><Link href="/ecommerce#ai-ordering" className="hover:text-white transition">WhatsApp & Voice AI</Link></li>
              <li><Link href="/ecommerce#oms" className="hover:text-white transition">Unified OMS Inbox</Link></li>
            </ul>
          </div>

          {/* Column 2: CRM & Retention */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">02 CRM</p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/crm#waba" className="hover:text-white transition">Official WhatsApp WABA</Link></li>
              <li><Link href="/crm#auto-campaigns" className="hover:text-white transition">Auto-Trigger Campaigns</Link></li>
              <li><Link href="/crm#rewards" className="hover:text-white transition">Membership & Loyalty</Link></li>
              <li><Link href="/crm#customer-lists" className="hover:text-white transition">Segmented Lists</Link></li>
              <li><Link href="/crm#analytics" className="hover:text-white transition">Campaign ROI Tracking</Link></li>
            </ul>
          </div>

          {/* Column 3: CMS & Digital Signage */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">03 Signage CMS</p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/cms#cloud-cms" className="hover:text-white transition">Cloud Signage CMS</Link></li>
              <li><Link href="/cms#offline-cms" className="hover:text-white transition">USB Offline Redundancy</Link></li>
              <li><Link href="/cms#pos-screens" className="hover:text-white transition">POS-Driven Menu Boards</Link></li>
              <li><Link href="/cms#ai-autopost" className="hover:text-white transition">AI Auto-Posting</Link></li>
              <li><Link href="/cms#staff-screens" className="hover:text-white transition">Staff & KDS Displays</Link></li>
            </ul>
          </div>

          {/* Column 4: IoT & Hardware */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">04 IoT & Hardware</p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/hardware#kiosks" className="hover:text-white transition">Listerr One Touch Kiosks</Link></li>
              <li><Link href="/hardware#wall-screens" className="hover:text-white transition">Ultra-Slim Wall Displays</Link></li>
              <li><Link href="/hardware#cameras" className="hover:text-white transition">Vision AI Camera Line</Link></li>
              <li><Link href="/hardware#edge-box" className="hover:text-white transition">CCTV Edge AI Box</Link></li>
              <li><Link href="/hardware#sizes" className="hover:text-white transition">Size & Model Matrix</Link></li>
              <li><Link href="/hardware#box" className="hover:text-white transition">What's in the Box</Link></li>
            </ul>
          </div>

          {/* Column 5: Industries & Legal */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">Solutions & Trust</p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/industries/restaurants" className="hover:text-white transition">Restaurants (Listerr 360)</Link></li>
              <li><Link href="/industries/fashion" className="hover:text-white transition">Clothing & Fashion Sellers</Link></li>
              <li><Link href="/industries/retail" className="hover:text-white transition">Retail & D2C Brands</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Notice & DPDP</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/refund" className="hover:text-white transition">Refund & Cancellation</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Company Identity (LGL-01, LGL-02) */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1">
            <p className="font-bold text-slate-400">
              Orifinity Private Limited (Listerr) · CIN: U74999RJ2018PTC060025
            </p>
            <p className="flex items-center gap-1.5 text-[11px]">
              <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              Operating Office: Malviya Nagar, Jaipur, Rajasthan 302017 · Regd. Office: Phulera, Jaipur 303338, India
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>© {new Date().getFullYear()} Listerr.in. All rights reserved.</span>
            <span>•</span>
            <span className="text-blue-300 flex items-center gap-1 font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" /> Made in India for Bharat Commerce
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
