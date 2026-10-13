export interface ListerrOneDevice {
  id: string
  name: string
  category: "kiosk" | "wall" | "portable" | "counter" | "videowall" | "pole"
  categoryLabel: string
  tagline: string
  image: string
  sizes: string[]
  brightness: string
  touch: "10-Point Capacitive Touch" | "Commercial Non-Touch Display"
  orientation: "Portrait" | "Landscape" | "Dual Orientation"
  bestFor: string
  specs: {
    panel: string
    resolution: string
    operatingHours: string
    connectivity: string
    os: string
    casing: string
  }
}

export const LISTERR_ONE_DEVICES: ListerrOneDevice[] = [
  {
    id: "self-ordering-kiosk-printer",
    name: "Listerr One Self-Ordering Kiosk with Printer",
    category: "kiosk",
    categoryLabel: "Self-Ordering Kiosk",
    tagline: "Interactive self-checkout totem with built-in thermal receipt printer for QSRs and retail.",
    image: "/images/hardware/listerr-one/image00010.png",
    sizes: ["43\"", "55\""],
    brightness: "500 nits Commercial IPS",
    touch: "10-Point Capacitive Touch",
    orientation: "Portrait",
    bestFor: "QSR express counters, food courts, hospital OPD registration, cinema ticketing",
    specs: {
      panel: "LG Commercial IPS A+ Grade Panel",
      resolution: "4K UHD (3840 x 2160)",
      operatingHours: "24/7 Continuous Operation",
      connectivity: "Dual-band Wi-Fi, Gigabit LAN, Bluetooth 5.0, USB 3.0",
      os: "Android 12 Enterprise / Windows 11 IoT",
      casing: "Cold-rolled sheet steel housing + 4mm explosion-proof tempered glass",
    },
  },
  {
    id: "floor-totem-kiosk",
    name: "Listerr One Commercial Floor Totem",
    category: "kiosk",
    categoryLabel: "Interactive Floor Totem",
    tagline: "Ultra-slim interactive kiosk with integrated dual stereo speakers and weighted steel base.",
    image: "/images/hardware/listerr-one/image00004.png",
    sizes: ["43\"", "50\"", "55\"", "65\""],
    brightness: "500 nits High Brightness",
    touch: "10-Point Capacitive Touch",
    orientation: "Portrait",
    bestFor: "Fashion retail lookbook browsing, hotel lobbies, showroom catalogs, jewelry stores",
    specs: {
      panel: "Ultra-clear anti-glare tempered glass panel",
      resolution: "4K UHD (3840 x 2160)",
      operatingHours: "24/7 Run Rating (50,000+ hours)",
      connectivity: "Wi-Fi, RJ45 Ethernet, HDMI-in, USB Host",
      os: "Android 12 / Pre-loaded Listerr Cloud CMS",
      casing: "Anodized aluminum alloy border + anti-topple steel floor plate",
    },
  },
  {
    id: "portable-aframe-easel",
    name: "Listerr One Portable A-Frame Easel Screen",
    category: "portable",
    categoryLabel: "Portable Signage",
    tagline: "Foldable, movable battery/plug easel screen for entrance promos and restaurant specials.",
    image: "/images/hardware/listerr-one/image00001.png",
    sizes: ["43\""],
    brightness: "450 nits High Ambient Visible",
    touch: "Commercial Non-Touch Display",
    orientation: "Portrait",
    bestFor: "Cafe entryways, boutique daily offers, banquet entrances, pop-up events",
    specs: {
      panel: "IPS Wide Viewing Angle (178°/178°)",
      resolution: "Full HD / 4K Options",
      operatingHours: "16/7 Operation",
      connectivity: "Wi-Fi, USB Auto-loop, HDMI",
      os: "Listerr Smart OS with USB offline fallback",
      casing: "Foldable aluminum A-frame tripod with safety locking hinge",
    },
  },
  {
    id: "landscape-menu-board",
    name: "Listerr One Digital Menu Board (Landscape)",
    category: "wall",
    categoryLabel: "Over-the-Counter Menu Board",
    tagline: "Horizontal commercial display engineered for over-the-counter digital menu boards.",
    image: "/images/hardware/listerr-one/image00014.png",
    sizes: ["43\"", "50\"", "55\"", "65\""],
    brightness: "500 nits Anti-Glare",
    touch: "Commercial Non-Touch Display",
    orientation: "Landscape",
    bestFor: "Over-the-counter restaurant menus, bakery combos, bar drink cards, drive-thru pass",
    specs: {
      panel: "Direct-lit commercial LED IPS",
      resolution: "4K UHD (3840 x 2160)",
      operatingHours: "24/7 Continuous Run",
      connectivity: "Ethernet, Wi-Fi, HDMI In, USB Media",
      os: "Listerr Cloud Signage Sync (Petpooja POS integrated)",
      casing: "Ultra-narrow border, heavy-duty VESA 400x400 wall bracket included",
    },
  },
  {
    id: "portrait-wall-display",
    name: "Listerr One Commercial Wall Display (Portrait)",
    category: "wall",
    categoryLabel: "Vertical Wall Display",
    tagline: "Flush-mount vertical digital poster for apparel lookbooks and storefront pillars.",
    image: "/images/hardware/listerr-one/image00002.png",
    sizes: ["43\"", "55\"", "65\"", "75\""],
    brightness: "500 nits Anti-Glare",
    touch: "Commercial Non-Touch Display",
    orientation: "Portrait",
    bestFor: "Mall corridor pillars, fashion store window walls, salon service menus",
    specs: {
      panel: "Commercial grade IPS with anti-dust coating",
      resolution: "4K UHD (3840 x 2160)",
      operatingHours: "24/7 Continuous Run",
      connectivity: "Cloud CMS sync, USB auto-play, HDMI",
      os: "Listerr Cloud Signage Engine pre-configured",
      casing: "Slim 19mm profile metal chassis + flush wall bracket",
    },
  },
  {
    id: "countertop-pos-display",
    name: "Listerr One Countertop POS Display",
    category: "counter",
    categoryLabel: "Countertop Touch Display",
    tagline: "Angled compact touch display for billing counter customer interactions and feedback.",
    image: "/images/hardware/listerr-one/image00008.png",
    sizes: ["15.6\"", "21.5\""],
    brightness: "400 nits Anti-Fingerprint",
    touch: "10-Point Capacitive Touch",
    orientation: "Portrait",
    bestFor: "Billing counters, customer loyalty phone number input, QR UPI scan & pay",
    specs: {
      panel: "Edge-to-edge true flat glass",
      resolution: "Full HD (1920 x 1080)",
      operatingHours: "24/7 Commercial Rating",
      connectivity: "USB-C, RJ45, Wi-Fi, RS232 Serial POS",
      os: "Android / Windows POS Compatible",
      casing: "Die-cast aluminum counter stand with integrated cable passthrough",
    },
  },
  {
    id: "videowall-2x2",
    name: "Listerr One 2x2 Seamless Video Wall",
    category: "videowall",
    categoryLabel: "Commercial Video Wall",
    tagline: "Ultra-narrow bezel 2x2 matrix video wall for flagship retail and corporate atrium displays.",
    image: "/images/hardware/listerr-one/image00015.jpeg",
    sizes: ["55\" x 4 (110\" Total)"],
    brightness: "500–700 nits High Brightness",
    touch: "Commercial Non-Touch Display",
    orientation: "Dual Orientation",
    bestFor: "Flagship retail stores, hotel lobbies, corporate atriums, cinema preview walls",
    specs: {
      panel: "0.88mm / 1.7mm Ultra-Narrow Bezel Panels",
      resolution: "4K Video Wall Matrix Processing",
      operatingHours: "24/7 Industrial Grade",
      connectivity: "HDMI Daisy Chain, DP 1.2, RS232 Network Control",
      os: "Listerr Video Wall Matrix Controller included",
      casing: "Hydraulic pop-out push maintenance bracket",
    },
  },
  {
    id: "modular-videowall-3x3",
    name: "Listerr One 3x3 Modular Video Wall on Rigging",
    category: "videowall",
    categoryLabel: "Large Format Video Wall",
    tagline: "Large-format 9-screen modular video wall with structural floor stand for exhibitions and arenas.",
    image: "/images/hardware/listerr-one/image00006.png",
    sizes: ["55\" x 9 (165\" Total)"],
    brightness: "700 nits Industrial Brightness",
    touch: "Commercial Non-Touch Display",
    orientation: "Dual Orientation",
    bestFor: "Shopping mall central atriums, event centers, high-traffic transport hubs",
    specs: {
      panel: "Commercial DID panels with auto color calibration",
      resolution: "Multi-screen synchronous 4K/8K matrix",
      operatingHours: "24/7 Continuous Industrial Rating",
      connectivity: "Distributed IP matrix, fiber optical audio/video input",
      os: "Listerr Multi-Display Controller",
      casing: "Heavy-duty modular square-tube aluminum ground rigging",
    },
  },
  {
    id: "floor-pole-kiosk",
    name: "Listerr One Floor Pole Stand with Shelf",
    category: "pole",
    categoryLabel: "Pole-Mounted Kiosk",
    tagline: "Minimalist floor pole mount with customer tray for hand sanitizer or scanner attachment.",
    image: "/images/hardware/listerr-one/image00007.png",
    sizes: ["21.5\"", "32\""],
    brightness: "450 nits",
    touch: "10-Point Capacitive Touch",
    orientation: "Portrait",
    bestFor: "Store queue entrances, customer feedback stations, clinic appointment check-in",
    specs: {
      panel: "IPS Wide View Glass",
      resolution: "Full HD (1920 x 1080)",
      operatingHours: "16/7 Commercial Operation",
      connectivity: "Wi-Fi, Ethernet, USB",
      os: "Android 12 Enterprise",
      casing: "Heavy weighted round base + stainless steel tubular pole",
    },
  },
]
