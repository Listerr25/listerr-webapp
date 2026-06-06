export type PlanId = "starter" | "growth" | "scale" | "enterprise"

export type Plan = {
  id: PlanId
  name: string
  description: string
  priceMonthly?: number
  priceAnnual?: number
  custom?: boolean
  popular?: boolean
  cta: string
  href: string
  features: string[]
}

export const PLANS: readonly Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description:
      "For startups and small brands launching engagement for the first time.",
    priceMonthly: 9999,
    priceAnnual: 95988,
    cta: "Start Free",
    href: "/signup",
    features: [
      "50,000 MAU included",
      "Stories & Lists formats",
      "5 team members",
      "Basic analytics",
      "Email support",
      "Listerr branding on content",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description:
      "For scaling D2C brands ready to drive serious engagement and conversions.",
    priceMonthly: 29999,
    priceAnnual: 287988,
    popular: true,
    cta: "Start Free Trial",
    href: "/signup",
    features: [
      "500,000 MAU included",
      "Stories, Reels, Lists, Gamification",
      "AI Personalisation standard",
      "Unlimited A/B tests",
      "20 team members",
      "Advanced analytics & revenue attribution",
      "No Listerr branding",
      "3 Smart Flows",
      "Chat + email support",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    description:
      "For high-traffic platforms with advanced AI and personalisation requirements.",
    priceMonthly: 79999,
    priceAnnual: 767988,
    cta: "Talk to Sales",
    href: "/contact",
    features: [
      "5 million MAU included",
      "All formats + custom formats",
      "Unlimited team members",
      "Full AI Personalisation suite",
      "Unlimited Smart Flows",
      "Real-time analytics API",
      "Dedicated Customer Success Manager",
      "99.9% SLA",
      "India data residency option",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "For large platforms, banks, and enterprises with 10M+ users or compliance requirements.",
    custom: true,
    cta: "Contact Enterprise",
    href: "/contact",
    features: [
      "Unlimited MAU",
      "On-premise or private cloud option",
      "White-label available",
      "Custom SLAs & contracts",
      "Security review & pen-test support",
      "DPDP + GDPR DPAs",
      "Dedicated engineering support",
    ],
  },
]

export const AI_ADDONS = [
  {
    product: "AI Calling",
    pricing: "₹3 per minute of AI call time",
    includedIn: "Scale & Enterprise",
  },
  {
    product: "AI Text Ordering",
    pricing: "₹0.50 per order processed",
    includedIn: "Growth, Scale, Enterprise",
  },
  {
    product: "AI Voice Ordering",
    pricing: "₹1 per voice order session",
    includedIn: "Scale & Enterprise",
  },
  {
    product: "Listerr Order (OMS)",
    pricing: "₹5,000/mo up to 10K orders",
    includedIn: "All plans as add-on",
  },
  {
    product: "AI Content Cataloging",
    pricing: "₹2,000/mo up to 5,000 SKUs",
    includedIn: "All plans as add-on",
  },
] as const

export const COMPARISON_ROWS = [
  ["Volume", "MAU", "50,000", "500,000", "5 million", "Unlimited"],
  ["Volume", "Smart Flows", "Not included", "3", "Unlimited", "Unlimited"],
  ["Volume", "Team members", "5", "20", "Unlimited", "Unlimited"],
  ["Volume", "A/B tests", "Basic", "Unlimited", "Unlimited", "Unlimited"],
  ["Formats", "Stories", true, true, true, true],
  ["Formats", "Reels", false, true, true, true],
  ["Formats", "Lists", true, true, true, true],
  ["Formats", "Gamification", false, true, true, true],
  ["Formats", "Custom formats", false, false, true, true],
  ["AI", "AI Personalisation", "Not included", "Standard", "Full suite", "Full suite"],
  ["AI", "Multi-armed bandit", false, false, true, true],
  ["AI", "Cohort builder", false, true, true, true],
  ["Analytics", "Basic analytics", true, true, true, true],
  ["Analytics", "Revenue attribution", false, true, true, true],
  ["Analytics", "Real-time API", false, false, true, true],
  ["Support", "Email support", true, true, true, true],
  ["Support", "Chat support", false, true, true, true],
  ["Support", "Dedicated CSM", false, false, true, true],
  ["Support", "SLA", false, false, "99.9%", "Custom"],
  ["Compliance", "DPDP", true, true, true, true],
  ["Compliance", "India residency", false, false, true, true],
  ["Compliance", "On-premise", false, false, false, true],
  ["Compliance", "White-label", false, false, false, true],
  ["Branding", "Listerr branding", "Included", "Removed", "Removed", "Removed"],
] as const

export const PRICING_FAQS = [
  [
    "What counts as a Monthly Active User?",
    "A Monthly Active User is a unique user who sees or interacts with Listerr-powered content during a billing month.",
  ],
  [
    "Can I switch plans mid-cycle?",
    "Yes. Upgrades are prorated immediately, while downgrades apply from the next billing cycle.",
  ],
  [
    "Do you offer annual discounts?",
    "Yes. Annual billing saves 20% compared with monthly billing.",
  ],
  [
    "Is there a free trial?",
    "Yes. Starter and Growth can begin with a free trial and no credit card.",
  ],
  [
    "How does AI Calling pricing work?",
    "AI Calling is metered by completed AI call minutes at the published add-on rate.",
  ],
  [
    "Do you charge for failed text orders?",
    "No. AI Text Ordering is charged on successfully processed orders.",
  ],
  [
    "Do you support GST invoicing?",
    "Yes. Indian entities receive GST-compliant invoices in INR.",
  ],
  [
    "Can I bring my own WhatsApp Business API?",
    "Yes. Growth, Scale, and Enterprise teams can connect their own approved WhatsApp Business setup.",
  ],
  [
    "What if I exceed my MAU cap?",
    "We notify you before limits become a problem and recommend the right plan or overage structure.",
  ],
  [
    "Who owns the data collected through Listerr?",
    "Your business owns its customer and campaign data. Listerr processes it under the agreed data processing terms.",
  ],
] as const

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}
