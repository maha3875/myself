import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "techpickers",
    title: "Techpickers",
    tagline: "Consumer Tech & Electronics Specification Portal",
    category: "Web & Media",
    badge: "Edge Architecture",
    featured: true,
    accentColor: "from-cyan-500 to-blue-600",
    summary: "Consumer tech discovery and electronics specification portal powered by Next.js, automated product API ingestion pipelines, and Supabase real-time storage.",
    fullOverview: "Techpickers (techpickers.in) is engineered to provide fast, unbiased hardware specifications and gear recommendations for modern tech enthusiasts. Instead of clunky bloated e-commerce portals, Techpickers utilizes a headless architecture with edge caching to deliver instantaneous benchmark lookups, comparative spec side-by-sides, and curated buying guidance.",
    challenge: "Traditional tech spec sites suffer from massive page weight, heavy tracker scripts, and outdated catalog databases that take seconds to render on mobile networks.",
    solution: "Engineered an edge-first web application backed by Supabase PostgreSQL. Integrated automated Python and n8n ingestion scripts that fetch, parse, and normalize hardware specs from multiple manufacturer feeds automatically.",
    impactMetrics: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Catalog Specs", value: "1,200+" },
      { label: "Monthly Users", value: "25K+" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase", "Cloudflare Workers", "Python Scrapers"],
    liveUrl: "https://techpickers.in",
    githubUrl: "https://github.com/maha3875"
  },
  {
    id: "tnkalvi",
    title: "TN Kalvi Online",
    tagline: "High-Speed Educational Resource & Teacher Automation Hub",
    category: "Educational Platform",
    badge: "Public Utility",
    featured: true,
    accentColor: "from-emerald-400 to-teal-600",
    summary: "High-speed educational resource platform for Tamil Nadu students and faculty, deployed via Cloudflare Workers and Render with instantaneous circular downloads.",
    fullOverview: "TN Kalvi Online (tnkalvi.online) serves thousands of educators, headmasters, and students across Tamil Nadu with government circulars, syllabus resources, and one-click automation spreadsheets. Deployed on high-performance edge nodes via Cloudflare Workers and Render, the portal remains lightning-fast during peak exam result announcements when state servers typically throttle.",
    challenge: "During state syllabus updates and government circular releases, heavy server traffic regularly crashed standard shared hosting instances, leaving teachers without access to vital administrative documents.",
    solution: "Architected a dual-origin edge caching layer using Cloudflare Workers with Render microservices. Static PDF circulars and marksheet utilities are cached at edge PoPs with automatic background cache revalidation.",
    impactMetrics: [
      { label: "Community Reach", value: "50K+ Users" },
      { label: "Edge Response", value: "< 45ms" },
      { label: "Uptime During Exams", value: "99.98%" }
    ],
    technologies: ["Cloudflare Workers", "Render", "React", "Tailwind CSS", "Google Drive API", "CDN Caching"],
    liveUrl: "https://tnkalvi.online",
    githubUrl: "https://github.com/maha3875"
  },
  {
    id: "n8n-apps-script-automation",
    title: "Autonomous Enterprise & School Automation",
    tagline: "Self-Hosted n8n Orchestration & Google Apps Script Engine",
    category: "Automation System",
    badge: "Autonomous Core",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600",
    summary: "Dockerized n8n workflow cluster fronted by Caddy reverse proxy, integrated with Google Apps Script to automate institutional reporting, marksheets, and parent alerts.",
    fullOverview: "A mission-critical autonomous automation suite built for institutions. Self-hosted on Linux servers with Docker and secured behind Caddy HTTPS, the system runs dozens of daily cron triggers: pulling student attendance from IoT scanners, running grade percentile calculations, rendering watermarked PDF marksheets, and triggering localized WhatsApp/SMS alerts via webhooks.",
    challenge: "School administrative teams spent hundreds of hours every month manually preparing report cards, cross-referencing subject scores, and calling parents regarding absenteeism.",
    solution: "Engineered headless Google Apps Script macros and n8n webhook nodes that run completely autonomously. When teachers submit scores via Google Sheets, the pipeline runs grade normalization, generates 1,500 personalized PDFs in 12 minutes, and archives them in secured Drive folders.",
    impactMetrics: [
      { label: "Time Reclaimed", value: "90+ hrs/mo" },
      { label: "Batch Speed", value: "1,500 PDFs / 12m" },
      { label: "Human Error", value: "0% (Eliminated)" }
    ],
    technologies: ["Self-Hosted n8n", "Docker", "Caddy", "Google Apps Script", "Python (FastAPI)", "WhatsApp Webhooks"],
    githubUrl: "https://github.com/maha3875"
  },
  {
    id: "embedded-tft-telemetry",
    title: "Embedded TFT HUD & Automotive Telemetry",
    tagline: "Arduino Uno R4 & Raspberry Pi Hardware Telemetry Cockpit",
    category: "Infrastructure",
    badge: "Hardware & IoT",
    featured: false,
    accentColor: "from-amber-400 to-orange-600",
    summary: "Physical embedded micro-controller cockpit powered by Arduino Uno R4 and Raspberry Pi, driving real-time SPI TFT instrumentation and automotive diagnostics.",
    fullOverview: "A custom embedded hardware project combining 32-bit ARM Cortex computing with tactile displays. Interfaces with automotive auxiliary power systems and sensors, rendering custom anti-aliased speed, voltage, temperature, and trip telemetry on an SPI ST7789 TFT display at 60 FPS.",
    challenge: "Analog gauges or generic OBD scanners lack customization, high-refresh graphic animation, and low-power standby capability when vehicle ignition is off.",
    solution: "Developed lightweight C/C++ firmware utilizing hardware SPI DMA on the Arduino Uno R4. Built sleep-wake interrupts triggered by voltage thresholds to preserve vehicle battery health.",
    impactMetrics: [
      { label: "Refresh Rate", value: "60 FPS SPI" },
      { label: "Standby Draw", value: "< 2.5mA" },
      { label: "Telemetry Latency", value: "< 5ms" }
    ],
    technologies: ["Arduino Uno R4", "Raspberry Pi", "ST7789 TFT", "C++", "SPI DMA", "Automotive Wiring"],
    githubUrl: "https://github.com/maha3875"
  },
  {
    id: "creator-media-channels",
    title: "Maha Techz & Last Bench Creators Media",
    tagline: "3D Animation Studio & Tech Education Channels",
    category: "Web & Media",
    badge: "Creative Media",
    featured: false,
    accentColor: "from-rose-500 to-pink-600",
    summary: "Digital media studio producing 3D animated comedy skits (Last Bench Creators) alongside hardware teardowns and automation tutorials (Maha Techz).",
    fullOverview: "Blending software and hardware expertise with digital storytelling. Last Bench Creators produces viral 3D animated comedy skits exploring student life and tech humor, modeled in Blender and rendered in real time. Maha Techz and Maha Tech Automation provide developer tutorials on self-hosting, gadget optimization, and automation workflows.",
    challenge: "Making complex technical topics like self-hosting, Docker, and automation accessible and entertaining to vernacular audiences.",
    solution: "High-energy editing, custom 3D character rigs, and real-time live demonstrations showing start-to-finish implementations without fluff.",
    impactMetrics: [
      { label: "Total Views", value: "100K+" },
      { label: "Episodes Released", value: "45+" },
      { label: "Community Engagement", value: "96% Positive" }
    ],
    technologies: ["Blender 3D", "DaVinci Resolve", "Premiere Pro", "Audacity", "YouTube Studio"],
    liveUrl: "https://youtube.com/@mahatechz"
  }
];
