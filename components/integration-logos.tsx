import type { ReactNode } from "react"
import { 
  SiShopify, 
  SiWoocommerce, 
  SiRazorpay, 
  SiStripe,
  SiMeta, 
  SiGoogleads, 
  SiWhatsapp, 
  SiGoogleanalytics, 
  SiWordpress, 
  SiInstagram, 
  SiFacebook, 
  SiGoogleslides 
} from "react-icons/si"

/* ═══════════════════════════════════════════════════
   INTEGRATION BRAND LOGOS (SVG)
   Recognizable simplified logos using official brand colors
   ═══════════════════════════════════════════════════ */

function LogoWrapper({ children, bg }: { children: ReactNode; bg: string }) {
  return (
    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${bg}`}>
      {children}
    </div>
  )
}

export function ShopifyLogo() {
  return (
    <LogoWrapper bg="bg-[#96BF48]">
      <SiShopify className="h-5 w-5 text-white" />
    </LogoWrapper>
  )
}

export function WooCommerceLogo() {
  return (
    <LogoWrapper bg="bg-[#7B51AD]">
      <SiWoocommerce className="h-5 w-5 text-white" />
    </LogoWrapper>
  )
}

export function RazorpayLogo() {
  return (
    <LogoWrapper bg="bg-white border border-gray-200">
      <SiRazorpay className="h-5 w-5 text-[#072654]" />
    </LogoWrapper>
  )
}

export function StripeLogo() {
  return (
    <LogoWrapper bg="bg-[#635BFF]">
      <SiStripe className="h-5 w-5 text-white" />
    </LogoWrapper>
  )
}

export function MetaAdsLogo() {
  return (
    <LogoWrapper bg="bg-[#0668E1]">
      <SiMeta className="h-5 w-5 text-white" />
    </LogoWrapper>
  )
}

export function GoogleAdsLogo() {
  return (
    <LogoWrapper bg="bg-white border border-gray-200">
      <SiGoogleads className="h-5 w-5" color="#4285F4" />
    </LogoWrapper>
  )
}

export function WhatsAppLogo() {
  return (
    <LogoWrapper bg="bg-[#25D366]">
      <SiWhatsapp className="h-5 w-5 text-white" />
    </LogoWrapper>
  )
}

export function MoEngageLogo() {
  return (
    <LogoWrapper bg="bg-[#1B2A4A]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M4 8l4 8 4-6 4 6 4-8" stroke="#00C9FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </LogoWrapper>
  )
}

export function CleverTapLogo() {
  return (
    <LogoWrapper bg="bg-[#EF4123]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="2" />
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </LogoWrapper>
  )
}

export function WebEngageLogo() {
  return (
    <LogoWrapper bg="bg-[#5046E5]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M4 6h16M4 12h16M4 18h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="18" r="3" fill="#FFD700" />
      </svg>
    </LogoWrapper>
  )
}

export function SegmentLogo() {
  return (
    <LogoWrapper bg="bg-[#52BD95]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M4 9h12M8 15h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="9" r="2.5" fill="white" />
        <circle cx="5" cy="15" r="2.5" fill="white" />
      </svg>
    </LogoWrapper>
  )
}

export function GA4Logo() {
  return (
    <LogoWrapper bg="bg-white border border-gray-200">
      <SiGoogleanalytics className="h-5 w-5" color="#E37400" />
    </LogoWrapper>
  )
}

export function WordPressLogo() {
  return (
    <LogoWrapper bg="bg-[#21759B]">
      <SiWordpress className="h-5 w-5 text-white" />
    </LogoWrapper>
  )
}

export function InstagramLogo() {
  return (
    <LogoWrapper bg="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
      <SiInstagram className="h-5 w-5 text-white" />
    </LogoWrapper>
  )
}

export function FacebookLogo() {
  return (
    <LogoWrapper bg="bg-[#1877F2]">
      <SiFacebook className="h-5 w-5 text-white" />
    </LogoWrapper>
  )
}

export function GoogleSlidesLogo() {
  return (
    <LogoWrapper bg="bg-white border border-gray-200">
      <SiGoogleslides className="h-5 w-5" color="#F4B400" />
    </LogoWrapper>
  )
}

/* Map of integration names → logo components */
export const integrationLogos: Record<string, () => ReactNode> = {
  Shopify: () => <ShopifyLogo />,
  WooCommerce: () => <WooCommerceLogo />,
  Razorpay: () => <RazorpayLogo />,
  Stripe: () => <StripeLogo />,
  "Meta Ads": () => <MetaAdsLogo />,
  "Google Ads": () => <GoogleAdsLogo />,
  WhatsApp: () => <WhatsAppLogo />,
  MoEngage: () => <MoEngageLogo />,
  CleverTap: () => <CleverTapLogo />,
  WebEngage: () => <WebEngageLogo />,
  Segment: () => <SegmentLogo />,
  GA4: () => <GA4Logo />,
  WordPress: () => <WordPressLogo />,
  Instagram: () => <InstagramLogo />,
  Facebook: () => <FacebookLogo />,
  "Google Slides": () => <GoogleSlidesLogo />,
}
