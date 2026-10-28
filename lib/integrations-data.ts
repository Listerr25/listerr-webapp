export interface IntegrationItem {
  id: string
  name: string
  category:
    | "pos"
    | "cctv-vision"
    | "signage-screens"
    | "messaging-whatsapp"
    | "ecommerce-catalog"
    | "payments-upi"
    | "delivery-logistics"
    | "ai-voice"
    | "analytics-cdp"
  categoryLabel: string
  shortDesc: string
  fullDesc: string
  protocols: string[]
  status: "Verified & Instant" | "Certified Partner" | "Edge Box Plug & Play" | "Direct API"
  badgeColor?: string
  dataPoints: string[]
  reactiveTriggers: string[]
  setupTime: string
  popularInIndia: boolean
  samplePayload?: string
}

export const INTEGRATION_CATEGORIES = [
  { id: "all", label: "All Integrations" },
  { id: "pos", label: "POS & Billing" },
  { id: "cctv-vision", label: "CCTV & Vision AI" },
  { id: "signage-screens", label: "Digital Signage (CMS)" },
  { id: "messaging-whatsapp", label: "WhatsApp & Alerts" },
  { id: "ecommerce-catalog", label: "E-Commerce & ONDC" },
  { id: "payments-upi", label: "Payments & UPI" },
  { id: "delivery-logistics", label: "Delivery & Logistics" },
  { id: "ai-voice", label: "AI Voice & Telephony" },
  { id: "analytics-cdp", label: "Analytics & CDP" },
] as const

export const INTEGRATIONS_DATA: IntegrationItem[] = [
  // POS & Billing
  {
    id: "petpooja",
    name: "Petpooja",
    category: "pos",
    categoryLabel: "POS & Billing",
    shortDesc: "Two-way sync for orders, table status, KOT, and footfall-to-bill conversion.",
    fullDesc:
      "Seamlessly synchronizes Petpooja POS with Listerr Vision AI and Digital Signage. Compares camera footfall with generated bills to spot walkouts, auto-triggers express menu boards during peak rush, and alerts captains when tables are cleared.",
    protocols: ["Webhook", "REST API", "Local Sync Agent"],
    status: "Certified Partner",
    popularInIndia: true,
    setupTime: "< 15 minutes",
    dataPoints: [
      "Table occupancy & check-in/out",
      "KOT & billing line items",
      "Real-time item 86 (out-of-stock)",
      "Wait-time vs bill generation timestamps",
      "Captain & steward assignment",
    ],
    reactiveTriggers: [
      "Queue > 6 on Turret Camera -> Notify POS & prompt second billing terminal",
      "Item marked Out-of-Stock -> Remove instantaneously from digital menu boards",
      "Bill closed -> Flag table status as 'Needs Cleaning' on Dome Camera map",
    ],
    samplePayload: JSON.stringify(
      {
        event: "pos.bill_settled",
        outlet_id: "PETPOOJA_OUTLET_104",
        table_no: "T-14",
        bill_amount: 1480,
        settled_at: "2026-10-12T20:14:00Z",
        walkout_risk_score: "low",
      },
      null,
      2
    ),
  },
  {
    id: "restroworks",
    name: "Restroworks (POSist)",
    category: "pos",
    categoryLabel: "POS & Billing",
    shortDesc: "Enterprise multi-chain POS integration for fine dining, QSR, and large cloud kitchens.",
    fullDesc:
      "Deep enterprise connector for multi-outlet restaurant chains. Bridges table turnover timings, kitchen prep SLA (KDS), and inventory audits with Listerr One AI cameras and signage screens.",
    protocols: ["REST API", "Webhook", "OAuth 2.0"],
    status: "Certified Partner",
    popularInIndia: true,
    setupTime: "< 30 minutes",
    dataPoints: [
      "Multi-outlet real-time sales feed",
      "KDS (Kitchen Display System) tickets",
      "Table turn interval (seat-to-settle)",
      "Staff attendance and shift rosters",
    ],
    reactiveTriggers: [
      "KDS prep delay > 12 min -> Ping kitchen supervisor WhatsApp",
      "Dome Camera spots hand raised -> Dispatch steward via Restroworks steward app",
    ],
  },
  {
    id: "urbanpiper",
    name: "UrbanPiper",
    category: "pos",
    categoryLabel: "POS & Billing",
    shortDesc: "Omnichannel aggregator hub syncing Swiggy, Zomato, and direct orders with the pass camera.",
    fullDesc:
      "Connects aggregator order flows directly with Listerr Kitchen Hygiene Cameras. Snaps automated photos of packed delivery bags on the pass for quality verification and packaging dispute resolution.",
    protocols: ["REST API", "Webhook", "WebSockets"],
    status: "Verified & Instant",
    popularInIndia: true,
    setupTime: "< 10 minutes",
    dataPoints: [
      "Swiggy / Zomato order timestamps",
      "Rider arrived vs order handed-over timestamps",
      "Packaging quality audit snapshot link",
      "Aggregator item catalog availability",
    ],
    reactiveTriggers: [
      "Rider waiting > 7 mins -> Alert dispatch counter",
      "Order packed on pass -> Capture Plating Snapshot Audit from Kitchen Camera",
    ],
  },
  {
    id: "dotpe",
    name: "DotPe",
    category: "pos",
    categoryLabel: "POS & Billing",
    shortDesc: "Digital ordering, QR catalogs, and billing integration for high-throughput F&B.",
    fullDesc:
      "Pairs QR table ordering and self-checkout kiosks with Listerr One cameras. Eliminates counter bottlenecks by routing high queue spikes straight to contactless QR ordering screens.",
    protocols: ["REST API", "Webhook"],
    status: "Direct API",
    popularInIndia: true,
    setupTime: "< 15 minutes",
    dataPoints: [
      "QR scan timestamps per table",
      "Self-ordering payment confirmations",
      "Counter pickup tokens",
    ],
    reactiveTriggers: [
      "Counter queue > 5 -> Digital signage displays 'Skip Queue: Scan QR to Order'",
    ],
  },
  {
    id: "pine-labs",
    name: "Pine Labs & Plutus",
    category: "pos",
    categoryLabel: "POS & Billing",
    shortDesc: "POS payment terminals and smart EDC integration for checkout speed measurement.",
    fullDesc:
      "Correlates payment terminal swiping times with Turret Camera counter dwell metrics to calculate true cashier speed and friction points.",
    protocols: ["Terminal SDK", "Local Agent", "Cloud Webhook"],
    status: "Certified Partner",
    popularInIndia: true,
    setupTime: "< 20 minutes",
    dataPoints: ["Card/UPI transaction duration", "Terminal idle vs busy minutes"],
    reactiveTriggers: [
      "Terminal transaction duration > 90s -> Flag counter friction on manager dashboard",
    ],
  },

  // CCTV & Vision AI
  {
    id: "listerr-edge-box",
    name: "Listerr Vision AI Edge Box",
    category: "cctv-vision",
    categoryLabel: "CCTV & Vision AI",
    shortDesc: "Hardware bridge that runs on-premise AI models on standard CCTV IP cameras.",
    fullDesc:
      "Plug-and-play processing unit that sits on your local outlet network. Takes feeds from up to 8 standard IP cameras, processes 8 computer vision tasks locally, and syncs lightweight metadata without consuming internet bandwidth.",
    protocols: ["RTSP", "ONVIF", "Local Neural Engine", "MQTT"],
    status: "Edge Box Plug & Play",
    popularInIndia: true,
    setupTime: "< 10 minutes",
    dataPoints: [
      "Line-crossing footfall counts (IN/OUT)",
      "Queue count and estimated wait seconds",
      "Table status (Free, Occupied, Needs Cleaning)",
      "Cap, gloves, and apron hygiene compliance flags",
      "After-hours security movement triggers",
    ],
    reactiveTriggers: [
      "All 8 Listerr reactive automation rules trigger locally in < 300ms",
      "Offline cache auto-syncs upon broadband recovery",
    ],
  },
  {
    id: "rtsp-onvif-universal",
    name: "Universal RTSP & ONVIF Stream Connector",
    category: "cctv-vision",
    categoryLabel: "CCTV & Vision AI",
    shortDesc: "Connect any existing Hikvision, Dahua, CP Plus, Axis, or Uniview camera with zero replacement.",
    fullDesc:
      "No need to rip out your existing cameras. Listerr automatically discovers and authenticates RTSP and ONVIF video streams across your outlet switch to run real-time queue, table, and hygiene models.",
    protocols: ["RTSP", "ONVIF Profile S/G/T", "H.264 / H.265"],
    status: "Verified & Instant",
    popularInIndia: true,
    setupTime: "< 5 minutes",
    dataPoints: ["Sub-stream ingestion (720p/1080p)", "PTZ preset mapping", "Motion vectors"],
    reactiveTriggers: ["Local frame analysis inside Edge Box at 15-30 FPS"],
  },
  {
    id: "cp-plus-hikvision",
    name: "CP Plus & Hikvision NVR Integration",
    category: "cctv-vision",
    categoryLabel: "CCTV & Vision AI",
    shortDesc: "Native NVR connector for India's most widespread surveillance installations.",
    fullDesc:
      "Connects directly with CP Plus Orange/Indigo and Hikvision 4/8/16 channel NVRs over Ethernet. Extracts sub-streams for Vision AI without interfering with 24/7 continuous CCTV security recording.",
    protocols: ["NVR API", "RTSP Channel Mapping", "ONVIF"],
    status: "Verified & Instant",
    popularInIndia: true,
    setupTime: "< 10 minutes",
    dataPoints: ["NVR channel multiplexing", "Storage status", "Stream health heartbeat"],
    reactiveTriggers: ["Channel drop alert to manager dashboard"],
  },

  // Digital Signage & Screens (CMS)
  {
    id: "listerr-cms",
    name: "Listerr One Digital Signage CMS",
    category: "signage-screens",
    categoryLabel: "Digital Signage (CMS)",
    shortDesc: "Reactive cloud & offline menu board software that changes displays based on live camera data.",
    fullDesc:
      "Central control room for every screen in your outlet. Supports smart playlists, daypart scheduling, out-of-stock masking, and AI camera reactive triggers that dynamically adjust hero promos.",
    protocols: ["WebSocket", "MQTT", "Cloud CMS", "Local Cache"],
    status: "Verified & Instant",
    popularInIndia: true,
    setupTime: "Instant",
    dataPoints: [
      "Active layout & playlist state",
      "Screen online/offline heartbeat",
      "Reaction time to camera triggers (< 1.5s)",
    ],
    reactiveTriggers: [
      "Counter queue > 6 -> Switch menu board to 'Quick-Serve Combos'",
      "Footfall low -> Trigger afternoon tea & snack specials",
    ],
  },
  {
    id: "android-firetv-player",
    name: "Android TV & Amazon Fire Stick Player",
    category: "signage-screens",
    categoryLabel: "Digital Signage (CMS)",
    shortDesc: "Lightweight app turns any commercial TV or Fire Stick into a reactive Listerr One screen.",
    fullDesc:
      "Install the Listerr Screen Player APK on any standard Android TV, Google TV, or Fire TV stick. Works completely offline with cached 4K assets and listens on local network for camera triggers.",
    protocols: ["Android Native", "Local LAN WebSockets", "Offline Cache"],
    status: "Verified & Instant",
    popularInIndia: true,
    setupTime: "< 3 minutes",
    dataPoints: ["Display resolution (1080p/4K)", "Playback log audits", "App memory status"],
    reactiveTriggers: ["Local LAN broadcast trigger instant playlist switch"],
  },
  {
    id: "samsung-tizen-lg-webos",
    name: "Samsung Tizen & LG webOS Commercial Displays",
    category: "signage-screens",
    categoryLabel: "Digital Signage (CMS)",
    shortDesc: "Enterprise SoC support for Samsung Smart Signage (SSSP) and LG webOS Signage.",
    fullDesc:
      "Native HTML5/SoC client for Samsung QB/QM commercial series and LG UHD signage panels. Auto-boots on power-up, handles 16/7 or 24/7 commercial duty cycles.",
    protocols: ["Tizen WGT", "LG webOS IPK", "Cloud Sync"],
    status: "Certified Partner",
    popularInIndia: true,
    setupTime: "< 10 minutes",
    dataPoints: ["Panel temperature & health", "Commercial backlight scheduling"],
    reactiveTriggers: ["Automatic standby power-down after restaurant closing time"],
  },

  // WhatsApp & Messaging
  {
    id: "whatsapp-cloud-api",
    name: "Meta WhatsApp Cloud API (Direct)",
    category: "messaging-whatsapp",
    categoryLabel: "WhatsApp & Alerts",
    shortDesc: "Instant operational alerts for table delays, hygiene flags, and daily manager digests.",
    fullDesc:
      "Official Meta WhatsApp Cloud API integration delivering real-time actionable notifications to store owners, managers, floor captains, and kitchen supervisors with rich action buttons.",
    protocols: ["Meta Graph API", "Webhooks", "Template Messaging"],
    status: "Verified & Instant",
    popularInIndia: true,
    setupTime: "< 10 minutes",
    dataPoints: [
      "Message delivery & read receipts",
      "Interactive button clicks ('Table Cleaned', 'Resolved')",
      "Shift digest PDF distribution",
    ],
    reactiveTriggers: [
      "Table left uncleared for 5 mins -> Ping Floor Captain with Table # and clear button",
      "No gloves/cap on kitchen line -> Alert Kitchen Supervisor with timestamped clip",
      "After-hours motion -> Emergency security ping with snapshot",
    ],
  },
  {
    id: "gupshup-aisensy",
    name: "Gupshup & AiSensy WhatsApp Hub",
    category: "messaging-whatsapp",
    categoryLabel: "WhatsApp & Alerts",
    shortDesc: "Enterprise WhatsApp BSP integration for marketing campaigns and automated CRM drips.",
    fullDesc:
      "Bridges in-store camera footfall with targeted WhatsApp marketing. Re-engage customers who visited during peak hours with loyalty credits and feedback surveys.",
    protocols: ["REST API", "Webhook"],
    status: "Certified Partner",
    popularInIndia: true,
    setupTime: "< 15 minutes",
    dataPoints: [
      "Marketing template campaigns",
      "Customer opt-in state",
      "Drip automation triggers",
    ],
    reactiveTriggers: [
      "Customer bill settled -> Send automated WhatsApp review request & digital bill",
    ],
  },

  // E-Commerce & ONDC
  {
    id: "shopify-omnichannel",
    name: "Shopify Store & POS Sync",
    category: "ecommerce-catalog",
    categoryLabel: "E-Commerce & ONDC",
    shortDesc: "Unified catalog and omnichannel inventory sync between online store and physical outlets.",
    fullDesc:
      "Integrates your online Shopify store with Listerr in-outlet signage, AI cameras, and WhatsApp commerce. Keep inventory synchronized and show real-time in-store pickup availability on your website.",
    protocols: ["Shopify App", "GraphQL Admin API", "Webhooks"],
    status: "Certified Partner",
    popularInIndia: true,
    setupTime: "< 10 minutes",
    dataPoints: [
      "Product catalog & inventory counts",
      "Store pickup orders (BOPIS)",
      "Customer loyalty tags",
    ],
    reactiveTriggers: [
      "Online order placed for pickup -> Alert counter screen on Listerr Turret station",
    ],
  },
  {
    id: "ondc-seller-network",
    name: "ONDC (Open Network for Digital Commerce)",
    category: "ecommerce-catalog",
    categoryLabel: "E-Commerce & ONDC",
    shortDesc: "Publish your outlet menu/catalog across Paytm, Magicpin, ONDC buyer apps with zero middleman fee.",
    fullDesc:
      "Direct Beckn protocol gateway plugging Listerr Seller Studio into the ONDC network. Receive orders from multiple buyer apps while managing fulfillment on one Listerr dashboard.",
    protocols: ["Beckn Protocol", "REST API", "Webhooks"],
    status: "Certified Partner",
    popularInIndia: true,
    setupTime: "< 30 minutes",
    dataPoints: [
      "Beckn search/on_search catalog exchange",
      "Order confirm, status, and track events",
      "Settlement & logistics dispatch",
    ],
    reactiveTriggers: [
      "ONDC order arrived -> Print KOT and trigger packing snapshot on Kitchen Hygiene camera",
    ],
  },
  {
    id: "woocommerce-magento",
    name: "WooCommerce & Magento REST",
    category: "ecommerce-catalog",
    categoryLabel: "E-Commerce & ONDC",
    shortDesc: "Open-source ecommerce catalog sync for WordPress and enterprise Magento installations.",
    fullDesc:
      "Sync categories, stock levels, wholesale price tiers, and orders with Listerr E-Commerce suite and digital screens.",
    protocols: ["REST API", "Webhooks"],
    status: "Direct API",
    popularInIndia: false,
    setupTime: "< 15 minutes",
    dataPoints: ["Product pricing & variations", "Order status transitions"],
    reactiveTriggers: ["Stock update pushes automatically to digital signage catalog"],
  },

  // Payments & UPI
  {
    id: "razorpay-pos-gateway",
    name: "Razorpay & Razorpay POS",
    category: "payments-upi",
    categoryLabel: "Payments & UPI",
    shortDesc: "Online checkout, dynamic counter UPI QR, and payment link generation.",
    fullDesc:
      "Integrates Razorpay Payment Gateway, Magic Checkout, and Razorpay POS smart terminals. Generate dynamic UPI QRs on customer-facing screens that auto-reconcile with Petpooja or Listerr billing.",
    protocols: ["Razorpay SDK", "Webhooks", "Dynamic QR API"],
    status: "Certified Partner",
    popularInIndia: true,
    setupTime: "< 10 minutes",
    dataPoints: [
      "Payment success/failure webhooks",
      "UPI reference number (RRN)",
      "Instant settlement reconciliation",
    ],
    reactiveTriggers: [
      "Payment confirmed -> Clear queue token on counter screen & advance next customer",
    ],
  },
  {
    id: "cashfree-phonepe",
    name: "Cashfree & PhonePe PG",
    category: "payments-upi",
    categoryLabel: "Payments & UPI",
    shortDesc: "High-speed UPI Intent, auto-refunds, and soundbox payment status sync.",
    fullDesc:
      "Full UPI Intent flow for table QR ordering with sub-second payment confirmation and audio-visual confirmation on Listerr screens.",
    protocols: ["REST API", "Webhooks", "Server-to-Server callbacks"],
    status: "Verified & Instant",
    popularInIndia: true,
    setupTime: "< 10 minutes",
    dataPoints: ["VPA verification", "Instant webhook push (< 300ms)"],
    reactiveTriggers: ["Soundbox & screen announce 'Payment of Rs. X Received'"],
  },

  // Delivery & Logistics
  {
    id: "shiprocket-shadowfax-porter",
    name: "Shiprocket, Shadowfax & Porter",
    category: "delivery-logistics",
    categoryLabel: "Delivery & Logistics",
    shortDesc: "Hyperlocal 15-45 minute dispatch and national courier tracking for omnichannel retail.",
    fullDesc:
      "Automatically summon Shadowfax/Porter riders when the Kitchen Hygiene Camera logs a packed order on the dispatch pass.",
    protocols: ["REST API", "Webhooks", "Real-time rider tracking"],
    status: "Direct API",
    popularInIndia: true,
    setupTime: "< 15 minutes",
    dataPoints: [
      "Rider ETA and pickup coordinates",
      "Proof of delivery (POD) integration",
    ],
    reactiveTriggers: [
      "Dish snapshot verified at the pass -> Auto-request nearest hyperlocal delivery rider",
    ],
  },

  // AI Voice & Telephony
  {
    id: "exotel-voice-ai",
    name: "Exotel Cloud Telephony & Voice AI",
    category: "ai-voice",
    categoryLabel: "AI Voice & Telephony",
    shortDesc: "Automated table reservations, order status calls, and customer voice confirmations.",
    fullDesc:
      "Cloud telephony backbone powering Listerr AI Calling agents in Hindi, English, and regional Indian languages. Handles incoming customer queries and outbound table booking reminders.",
    protocols: ["Voice API", "WebSockets Audio Stream", "SIP Trunking"],
    status: "Certified Partner",
    popularInIndia: true,
    setupTime: "< 20 minutes",
    dataPoints: ["Call recordings & transcripts", "Intent classification", "Caller sentiment"],
    reactiveTriggers: [
      "VIP customer calls -> Look up past order history & greet by name",
      "Large reservation unconfirmed -> AI Voice bot calls guest 2 hours prior",
    ],
  },

  // Analytics & CDP
  {
    id: "segment-ga4-meta",
    name: "Segment, GA4 & Meta Conversions API",
    category: "analytics-cdp",
    categoryLabel: "Analytics & CDP",
    shortDesc: "Omnichannel customer analytics connecting physical store footfall with digital ads.",
    fullDesc:
      "Push physical store footfall, dwell heatmaps, and POS transactions into your Customer Data Platform. Create hyper-targeted Meta & Google ad retargeting audiences for customers who visited your offline outlet.",
    protocols: ["Segment Spec", "Meta CAPI", "Measurement Protocol (GA4)"],
    status: "Verified & Instant",
    popularInIndia: true,
    setupTime: "< 15 minutes",
    dataPoints: [
      "Offline conversion events",
      "Dwell time segments",
      "Customer lifetime value (LTV)",
    ],
    reactiveTriggers: [
      "Customer visits 3x in 10 days -> Add to 'High Value Loyalty' audience in Meta Ads",
    ],
  },
]
