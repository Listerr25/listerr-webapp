export interface CameraProduct {
  id: string
  name: string
  tagline: string
  formFactor: "Bullet" | "Dome" | "Turret" | "360° Fisheye" | "Kitchen Hygiene" | "Edge AI Box"
  recommendedPlacement: string
  bestFor: string[]
  image: string
  liveViewImage: string
  coreSpecs: {
    resolution: string
    connectivity: string
    storage: string
    weatherOrRating: string
    power: string
    aiCapability: string
  }
  keyFeatures: { title: string; description: string }[]
  visionAiCapabilities: { title: string; description: string }[]
  liveViewDescription: string
  visualBadge: string
  accentColor: string
  category: "entrance" | "dining" | "counter" | "kitchen" | "retrofit"
  categoryLabel: string
}

export const CAMERA_CATEGORIES = [
  { id: "all", label: "All Models" },
  { id: "counter", label: "Counters & Billing" },
  { id: "dining", label: "Dining Floor" },
  { id: "kitchen", label: "Kitchen & Prep" },
  { id: "entrance", label: "Entrance & Gate" },
  { id: "retrofit", label: "CCTV Retrofit" },
] as const

export const CAMERAS_DATA: CameraProduct[] = [
  {
    id: "bullet",
    name: "Listerr One Bullet AI Camera",
    tagline: "Long-reach outdoor vision for entrances, parking, and drive-thrus.",
    formFactor: "Bullet",
    recommendedPlacement:
      "Mount above the doorway and angle it across the flow of people, so each person crosses the count line once.",
    bestFor: ["Entrances", "Parking Lots", "Drive-thru Lanes", "Delivery Pick-up Points"],
    image: "/images/hardware/bullet-camera.png",
    liveViewImage: "/images/hardware/liveview-bullet-entrance.png",
    coreSpecs: {
      resolution: "4K UHD / 5MP Sensor",
      connectivity: "Gigabit Ethernet with Single-cable PoE (802.3af)",
      storage: "MicroSD up to 256GB + Edge Buffer + Cloud Event Sync",
      weatherOrRating: "IP67 Weather-sealed & Dust-tight Metal Casing",
      power: "PoE (Power + Data) / 12V DC fallback",
      aiCapability: "On-camera neural engine running line-crossing and plate OCR",
    },
    keyFeatures: [
      {
        title: "On-camera AI",
        description: "Runs Listerr Vision AI directly on the camera. Only lightweight counts and alerts leave the outlet.",
      },
      {
        title: "Night Vision IR",
        description: "Adaptive infrared illuminators up to 30m for crystal-clear night operations and after-hours monitoring.",
      },
      {
        title: "Outdoor Weather-sealed",
        description: "Heavy-duty IP67 casing built to withstand extreme Indian summer heat, monsoon rain, and dust.",
      },
      {
        title: "Single-cable PoE",
        description: "Power and high-speed data carried over a single Cat6 Ethernet cable. Zero messy wiring.",
      },
      {
        title: "Privacy Blurring",
        description: "Faces and vehicle license plates automatically masked in saved clips and exports per DPDP regulations.",
      },
      {
        title: "Works Offline",
        description: "Continues counting and tracking during broadband downtime; synchronizes metadata automatically when online.",
      },
    ],
    visionAiCapabilities: [
      {
        title: "Footfall In / Out",
        description: "Hourly and daily guest counts with direction recognition at every door.",
      },
      {
        title: "Parking Occupancy",
        description: "Real-time tracking of occupied vs free parking bays for guests.",
      },
      {
        title: "Drive-thru Lane Timing",
        description: "Car count in queue and time elapsed from arrival to service window.",
      },
      {
        title: "After-hours Security Alerts",
        description: "Instant WhatsApp and siren alert if motion or person detected after closing hours.",
      },
    ],
    liveViewDescription:
      "Line-crossing count at the entrance: every guest receives a steady tracking ID and is counted once in or out.",
    visualBadge: "Outdoor & Entrances",
    accentColor: "from-blue-600 to-blue-500",
    category: "entrance",
    categoryLabel: "Entrance & Gate",
  },
  {
    id: "dome",
    name: "Listerr One Dome AI Camera",
    tagline: "Discreet ceiling camera for dining halls, food courts, and table turnover tracking.",
    formFactor: "Dome",
    recommendedPlacement:
      "Ceiling-mount at the centre of the dining section so every table sits inside the view without pillar obstruction.",
    bestFor: ["Dining Halls", "Food Courts", "Banquet Halls", "Cafés"],
    image: "/images/hardware/dome-camera.png",
    liveViewImage: "/images/hardware/liveview-dome-tables.png",
    coreSpecs: {
      resolution: "5MP Wide-Angle Starlight Sensor",
      connectivity: "Gigabit Ethernet with Single-cable PoE",
      storage: "On-device flash storage + Local Edge Box sync",
      weatherOrRating: "IK10 Vandal-resistant Tamper-proof Dome",
      power: "PoE (Power over Ethernet)",
      aiCapability: "Multi-table state classification & Pose Estimation for hand gestures",
    },
    keyFeatures: [
      {
        title: "Discreet Ceiling Profile",
        description: "Blends seamlessly into restaurant interiors and ambient lighting without intruding on dining ambience.",
      },
      {
        title: "IK10 Vandal Resistant",
        description: "High-impact polycarbonate dome shields camera optics against tampering, accidents, and cleaning wipes.",
      },
      {
        title: "Starlight Low-light Optics",
        description: "Maintains high color sensitivity and sharp tracking inside dimmed romantic or ambient dining rooms.",
      },
      {
        title: "Single-cable PoE",
        description: "Operates entirely over a single network drop. Simplifies ceiling conduit deployment.",
      },
      {
        title: "Privacy Blurring",
        description: "Customer faces masked in saved clips; strictly anonymous table occupancy and dwell timestamps leave the store.",
      },
      {
        title: "Table Heatmap Engine",
        description: "Computes seat-to-leave durations and flags bottlenecks on slow-clearing stations.",
      },
    ],
    visionAiCapabilities: [
      {
        title: "Live Table Occupancy Map",
        description: "Real-time color-coded table occupancy map on host stands and manager tablets.",
      },
      {
        title: "Table Turnover Optimization",
        description: "Calculates average seat-to-leave duration per table, party size, and daypart.",
      },
      {
        title: "Uncleared Table Alerts",
        description: "Pings floor captains on WhatsApp when a table remains uncleared for > 4 minutes after guests depart.",
      },
      {
        title: "Waiter Hand-Gesture Detection",
        description: "Identifies raised guest hands and notifies the nearest steward on their smartwatch or phone.",
      },
    ],
    liveViewDescription:
      "Table status from above: occupied, free, and needs-cleaning, updated in real time as guests arrive and leave.",
    visualBadge: "Dining Floor & Tables",
    accentColor: "from-blue-700 to-blue-600",
    category: "dining",
    categoryLabel: "Dining Floor",
  },
  {
    id: "turret",
    name: "Listerr One Turret AI Camera",
    tagline: "Eyeball camera aimed at counters and order points to measure wait times and drive POS triggers.",
    formFactor: "Turret",
    recommendedPlacement:
      "Mount behind or beside the counter facing the queue, high enough that people in line do not hide each other.",
    bestFor: ["Billing Counters", "QSR Order Points", "Pick-up Windows", "Prasadam Counters"],
    image: "/images/hardware/turret-camera.png",
    liveViewImage: "/images/hardware/liveview-turret-queue.png",
    coreSpecs: {
      resolution: "4MP High-Definition Eyeball Sensor",
      connectivity: "Single-cable PoE",
      storage: "Offline buffer with automatic cloud synchronization",
      weatherOrRating: "IP66 Semi-outdoor & Indoor Housing",
      power: "PoE (802.3af)",
      aiCapability: "Multi-object queue tracking, depth estimation & POS correlation",
    },
    keyFeatures: [
      {
        title: "Adjustable 3-Axis Eyeball",
        description: "Aim with pinpoint precision at any counter layout, pickup window, or narrow ordering corridor.",
      },
      {
        title: "Night Vision IR",
        description: "Clear infrared monitoring around cash registers and billing desks around the clock.",
      },
      {
        title: "PoE Simplicity",
        description: "Single Cat6 cable run directly to the counter network switch or router.",
      },
      {
        title: "Offline Syncing",
        description: "Stores queue metrics locally during internet dropouts and pushes historical graphs upon reconnect.",
      },
      {
        title: "Privacy Blurring",
        description: "Customer faces masked in previews; only tracking IDs and queue positions are processed.",
      },
      {
        title: "POS Paired",
        description: "Directly bridges queue duration data with POS ticket creation times.",
      },
    ],
    visionAiCapabilities: [
      {
        title: "Queue Length & Wait Estimation",
        description: "Live headcount inside the designated queue zone and calculated estimated wait time in minutes.",
      },
      {
        title: "Counter Service Duration",
        description: "Time elapsed from a customer reaching the till to receiving their receipt.",
      },
      {
        title: "Digital Signage Triggers",
        description: "Automatically switches menu boards to quick-serve combos when lines grow past 6 people.",
      },
      {
        title: "Footfall-to-Bill Ratio",
        description: "Compares visitors standing at the counter against bills generated on the POS to identify lost sales.",
      },
    ],
    liveViewDescription:
      "A queue zone drawn once in the app: the camera counts people inside it and estimates the wait time in seconds.",
    visualBadge: "Billing & Counters",
    accentColor: "from-blue-600 to-blue-500",
    category: "counter",
    categoryLabel: "Counters & Billing",
  },
  {
    id: "fisheye",
    name: "Listerr One 360° Fisheye AI Camera",
    tagline: "One ceiling camera that sees the whole room and builds footfall dwell heatmaps.",
    formFactor: "360° Fisheye",
    recommendedPlacement:
      "Ceiling-mount at the center of the room, clear of hanging light pendants and ceiling fans.",
    bestFor: ["Open-plan Restaurants", "Food Courts", "Retail Floors", "Lobbies"],
    image: "/images/hardware/fisheye-camera.png",
    liveViewImage: "/images/hardware/liveview-fisheye-heatmap.png",
    coreSpecs: {
      resolution: "12MP Ultra-Panoramic Sensor",
      connectivity: "Gigabit PoE",
      storage: "On-board local memory + Edge Box analytics",
      weatherOrRating: "Indoor Commercial Ceiling Mount",
      power: "PoE+ (802.3at)",
      aiCapability: "Hardware de-warping, spatial heatmaps & whole-floor occupancy",
    },
    keyFeatures: [
      {
        title: "360° Panoramic Vision",
        description: "Replaces 4 conventional cameras with a single panoramic view covering up to 2500 sq ft.",
      },
      {
        title: "Hardware De-warping",
        description: "Select between circular panoramic, quad split-screen, or 180° corridor flat projections.",
      },
      {
        title: "Low-light Ready",
        description: "Exceptional image fidelity during busy evening and late-night dinner service.",
      },
      {
        title: "Single-cable PoE",
        description: "Drastically cuts cabling, conduit, and switch port costs across large open dining halls.",
      },
      {
        title: "Privacy First",
        description: "Transforms human movements into anonymous heatmap data points without facial identification.",
      },
      {
        title: "Heatmap Intelligence",
        description: "Generates hourly color-coded dwell maps identifying hot spots and dead zones across the floor.",
      },
    ],
    visionAiCapabilities: [
      {
        title: "Footfall Heatmaps",
        description: "Identifies busy vs ignored dining tables and walkways, hour by hour.",
      },
      {
        title: "Zone Dwell Time",
        description: "Measures exactly how long guests linger in waiting lounges, self-service bars, and dining booths.",
      },
      {
        title: "Room Head-Count Occupancy",
        description: "Real-time total headcount in the premises to prevent overcrowding and ensure fire safety compliance.",
      },
      {
        title: "Display Placement Guidance",
        description: "Helps position promotional digital signage screens where guest eyes and feet naturally dwell.",
      },
    ],
    liveViewDescription:
      "Heatmap overlay on the floor plan: warm red/amber areas show where guests gather and dwell the longest.",
    visualBadge: "360° Whole Floor",
    accentColor: "from-blue-700 to-blue-500",
    category: "dining",
    categoryLabel: "Dining Floor",
  },
  {
    id: "kitchen-hygiene",
    name: "Listerr One Kitchen Hygiene Camera",
    tagline: "Steam-resistant wipe-clean camera for food safety, caps, gloves, and plating checks.",
    formFactor: "Kitchen Hygiene",
    recommendedPlacement:
      "Mount above the line or pass facing kitchen staff, so heads and hands are in view and away from direct steam vents.",
    bestFor: ["Commercial Kitchens", "Cloud Kitchens", "Bakeries", "Prasadam Preparation Halls"],
    image: "/images/hardware/kitchen-hygiene-camera.png",
    liveViewImage: "/images/hardware/liveview-kitchen-hygiene.png",
    coreSpecs: {
      resolution: "5MP Wide-Angle Food-Grade Sensor",
      connectivity: "Single-cable PoE",
      storage: "Private by default: video clips stay 100% local inside the outlet",
      weatherOrRating: "IP66 Sealed Wipe-Clean Housing, Steam & Splash Resistant",
      power: "PoE (802.3af)",
      aiCapability: "Cap, glove, apron segmentation, hand-wash counter, plating snapshot capture",
    },
    keyFeatures: [
      {
        title: "Sealed Steam & Splash Proof",
        description: "Constructed specifically to endure hot, humid, and greasy commercial kitchen environments.",
      },
      {
        title: "Wipe-clean Food-Zone Finish",
        description: "Food-safe smooth antimicrobial exterior designed to be easily sanitized during daily kitchen cleaning.",
      },
      {
        title: "Wide-angle Line Coverage",
        description: "Covers the entire hot line, preparation counter, or packaging pass from a single mount.",
      },
      {
        title: "Private by Default",
        description: "Kitchen video streams are strictly local and never uploaded to public clouds. Only audit flags sync.",
      },
      {
        title: "PoE Powered",
        description: "No dangerous high-voltage power plugs in wet food preparation areas.",
      },
      {
        title: "Compliance Logging",
        description: "Automatically maintains shift-wise hygiene audit certificates for FSSAI compliance inspections.",
      },
    ],
    visionAiCapabilities: [
      {
        title: "Cap, Gloves & Apron Checks",
        description: "Continuously checks hairnets/caps, gloves, and aprons on every staff member on the prep line.",
      },
      {
        title: "Hand-wash Station Compliance",
        description: "Logs visits to hand-washing stations and validates compliance per shift.",
      },
      {
        title: "Plating Snapshots at the Pass",
        description: "Captures an instant high-res photo of each dish at the pass for presentation and portion audits.",
      },
      {
        title: "After-hours Kitchen Movement",
        description: "Instant manager alarm if unauthorized access occurs in locked kitchen or cold storage at night.",
      },
    ],
    liveViewDescription:
      "Hygiene gear checked per person in real time: a missing cap or bare hands flags an instant compliance alert.",
    visualBadge: "Kitchen & Food Safety",
    accentColor: "from-blue-600 to-blue-700",
    category: "kitchen",
    categoryLabel: "Kitchen & Hygiene",
  },
  {
    id: "edge-box",
    name: "Listerr Vision AI Edge Box",
    tagline: "Compact local processing unit that upgrades your existing CCTV cameras into AI sensors.",
    formFactor: "Edge AI Box",
    recommendedPlacement:
      "Place near your network switch or NVR. Listerr configures your cameras, maps zones, and switches on analytics.",
    bestFor: ["Outlets with Existing CCTV", "Multi-camera Sites", "Franchise Roll-outs"],
    image: "/images/hardware/edge-ai-box.png",
    liveViewImage: "/images/hardware/liveview-turret-queue.png",
    coreSpecs: {
      resolution: "Up to 8 concurrent 1080p/4K RTSP IP camera streams",
      connectivity: "Dual Gigabit Ethernet ports (LAN + WAN isolation)",
      storage: "Industrial SSD for offline event buffering & model weights",
      weatherOrRating: "Fanless Industrial Aluminum Chassis",
      power: "12V-19V DC Industrial Power Adapter",
      aiCapability: "Dedicated NPU/GPU delivering up to 30 TOPS of local edge inference",
    },
    keyFeatures: [
      {
        title: "Multi-camera AI on One Box",
        description: "Runs simultaneous analytics across up to 8 standard CCTV cameras simultaneously.",
      },
      {
        title: "Works with Existing CCTV",
        description: "Upgrades CP Plus, Hikvision, Dahua, and Axis cameras without replacing a single piece of hardware.",
      },
      {
        title: "Zero Bandwidth Drag",
        description: "Video is processed inside the outlet; only numbers, alerts, and timestamps leave the premises.",
      },
      {
        title: "Offline Operation",
        description: "Maintains full alerting and reactive signage triggers even when the outlet internet is down.",
      },
      {
        title: "All Solutions Included",
        description: "Executes queues, table occupancy, footfall, heatmaps, and hygiene models identically to native AI cameras.",
      },
      {
        title: "Plug & Play Pre-configured",
        description: "Shipped pre-configured by Listerr with site-specific zones, thresholds, and POS connectors.",
      },
    ],
    visionAiCapabilities: [
      {
        title: "Turnkey CCTV Upgrade",
        description: "Adds state-of-the-art vision intelligence to your current NVR and IP camera infrastructure.",
      },
      {
        title: "Universal POS Bridge",
        description: "Pairs local camera events directly with Petpooja, Restroworks, or UrbanPiper over the local network.",
      },
      {
        title: "Natural Language Footage Search",
        description: "Type 'person in red shirt at billing counter, 8-9 pm' to immediately jump to the exact footage timestamp.",
      },
      {
        title: "Automated Cloud Sync",
        description: "Buffers metrics during broadband outages and syncs cleanly with multi-outlet chain dashboards.",
      },
    ],
    liveViewDescription:
      "Standard IP cameras already on site feed the Edge Box, which transforms raw video into real-time decisions.",
    visualBadge: "CCTV Retrofit Appliance",
    accentColor: "from-blue-900 to-blue-700",
    category: "retrofit",
    categoryLabel: "CCTV Retrofit Hub",
  },
]

export interface VisionAiTask {
  id: string
  title: string
  description: string
  application: string
  icon: string
  image: string
  category: "traffic" | "guest-service" | "kitchen-quality"
  categoryLabel: string
}

export const VISION_TASK_CATEGORIES = [
  { id: "all", label: "All Tasks" },
  { id: "traffic", label: "Queue & Footfall" },
  { id: "guest-service", label: "Dining & Guest Service" },
  { id: "kitchen-quality", label: "Kitchen & Food Prep" },
] as const

export const VISION_AI_TASKS: VisionAiTask[] = [
  {
    id: "object-detection",
    title: "Object Detection",
    description: "Finds and boxes every person, plate, cup, tray, or vehicle in the frame.",
    application: "Footfall counts, queues, table status",
    icon: "Box",
    image: "/images/vision-ai/task-object-detection.png",
    category: "traffic",
    categoryLabel: "Queue & Footfall",
  },
  {
    id: "instance-segmentation",
    title: "Instance Segmentation",
    description: "Outlines each individual item to the pixel, even when items overlap or touch.",
    application: "Portion control and dish plating checks",
    icon: "Layers",
    image: "/images/vision-ai/task-instance-segmentation.png",
    category: "kitchen-quality",
    categoryLabel: "Kitchen & Food Prep",
  },
  {
    id: "semantic-segmentation",
    title: "Semantic Segmentation",
    description: "Labels every pixel by type: floor, counter, wall, dining area, people.",
    application: "Zone mapping, crowding density",
    icon: "Grid",
    image: "/images/vision-ai/task-semantic-segmentation.png",
    category: "guest-service",
    categoryLabel: "Dining & Guest Service",
  },
  {
    id: "image-classification",
    title: "Image Classification",
    description: "Names what is in the picture with a calibrated confidence score.",
    application: "Dish recognition, clean vs dirty table",
    icon: "Tag",
    image: "/images/vision-ai/task-image-classification.png",
    category: "kitchen-quality",
    categoryLabel: "Kitchen & Food Prep",
  },
  {
    id: "pose-estimation",
    title: "Pose Estimation",
    description: "Tracks body keypoints to read gestures, posture, and arm movements.",
    application: "Service requests (raised hand), hand-wash steps",
    icon: "UserCheck",
    image: "/images/vision-ai/task-pose-estimation.png",
    category: "guest-service",
    categoryLabel: "Dining & Guest Service",
  },
  {
    id: "depth-estimation",
    title: "Depth Estimation",
    description: "Estimates how far each customer or object is from the camera lens.",
    application: "Physical queue length in meters, spacing",
    icon: "Maximize",
    image: "/images/vision-ai/task-depth-estimation.png",
    category: "traffic",
    categoryLabel: "Queue & Footfall",
  },
  {
    id: "oriented-detection",
    title: "Oriented Bounding Box",
    description: "Angle-aware bounding boxes for items seen from above at any rotation.",
    application: "Trays on the pass, packed delivery bags",
    icon: "RotateCw",
    image: "/images/vision-ai/task-oriented-detection.png",
    category: "kitchen-quality",
    categoryLabel: "Kitchen & Food Prep",
  },
  {
    id: "multi-object-tracking",
    title: "Multi-Object Tracking",
    description: "Follows each person across video frames with a persistent, steady ID.",
    application: "Counting guests once, dwell time, walking paths",
    icon: "TrendingUp",
    image: "/images/vision-ai/task-multi-object-tracking.png",
    category: "traffic",
    categoryLabel: "Queue & Footfall",
  },
]

export const SEVEN_POINT_ADVANTAGES = [
  {
    number: "1",
    title: "Unified Operating Platform",
    desc: "Cameras, Vision AI, POS, CRM, and digital signage operate in a closed reactive loop on one Listerr system.",
  },
  {
    number: "2",
    title: "Built for Indian F&B",
    desc: "Engineered specifically for Indian operational workflows — from high-rush prasadam counters to multi-outlet QSR chains.",
  },
  {
    number: "3",
    title: "Video Stays On-Premise",
    desc: "AI runs locally on the camera or Edge Box. Continuous video remains inside your outlet; only numbers leave.",
  },
  {
    number: "4",
    title: "Ready-Made Solutions",
    desc: "Pre-trained models ready out of the box: counter queues, table occupancy, door footfall, kitchen hygiene, and parking.",
  },
  {
    number: "5",
    title: "Works With Your Existing CCTV",
    desc: "No need to rip out working cameras. The Vision AI Edge Box adds Listerr intelligence to standard IP cameras.",
  },
  {
    number: "6",
    title: "WhatsApp & Live Dashboard",
    desc: "Instant reactive alerts on WhatsApp for store staff and a real-time analytics command centre for franchise owners.",
  },
  {
    number: "7",
    title: "Complete On-Site Setup Included",
    desc: "Site survey, camera installation, virtual zone configuration, rule drafting, and staff training handled by Listerr engineers.",
  },
]

export const REACTIVE_RULES_EXAMPLES = [
  {
    condition: "Queue longer than 6 people at counter",
    source: "Turret AI Camera",
    action: "Digital menu boards automatically switch to express quick-serve combos until the line clears.",
    destination: "Listerr One Digital Signage",
    category: "QSR Rush Control",
  },
  {
    condition: "Dining table left uncleared for 5 minutes",
    source: "Dome AI Camera",
    action: "Floor captain receives a WhatsApp alert with the exact table number to accelerate turnover.",
    destination: "WhatsApp Staff Bot",
    category: "Table Turnover",
  },
  {
    condition: "Footfall rises by 25% while POS bills remain flat",
    source: "Bullet AI Camera + POSist",
    action: "Dashboard flags a walkout conversion drop for the outlet manager to open a secondary till.",
    destination: "Manager Live Dashboard",
    category: "Lost Sales Prevention",
  },
  {
    condition: "Worker missing cap or gloves on the prep line",
    source: "Kitchen Hygiene Camera",
    action: "Kitchen supervisor is immediately pinged on WhatsApp and the event is logged for FSSAI audit.",
    destination: "Kitchen Alert & Audit Cloud",
    category: "Food Safety Audit",
  },
  {
    condition: "Guest raises hand at dining table",
    source: "Dome AI Camera (Pose Estimation)",
    action: "Assigned steward is notified on their smartwatch or phone to attend Table #8.",
    destination: "Steward Dispatch App",
    category: "Guest Service",
  },
  {
    condition: "Movement detected in closed outlet after hours",
    source: "Bullet / Kitchen Camera",
    action: "Emergency intruder siren triggers and high-priority snapshot alert dispatches to owner's phone.",
    destination: "Security WhatsApp & Siren",
    category: "After-Hours Security",
  },
]
