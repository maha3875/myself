export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'DevOps & Automation' | 'Hardware & Embedded';
  icon: string;
  badge?: string;
  level: string; // e.g. "Production", "Advanced", "Daily Driver"
  description: string;
}

export const techStackData: TechItem[] = [
  // Frontend
  { name: "Next.js", category: "Frontend", icon: "Layers", badge: "Primary", level: "Production", description: "App router, SSR/SSG & edge API routes" },
  { name: "React 19", category: "Frontend", icon: "Code2", badge: "Core", level: "Production", description: "Modern hooks, concurrent rendering & component architecture" },
  { name: "Tailwind CSS", category: "Frontend", icon: "Palette", badge: "Utility", level: "Daily Driver", description: "Fluid typography, dark-mode styling & responsive glassmorphism" },
  { name: "TypeScript", category: "Frontend", icon: "FileCode", badge: "Strict", level: "Production", description: "Type-safe contracts across frontend and serverless APIs" },

  // Backend & Cloud
  { name: "Python", category: "Backend & Cloud", icon: "Terminal", badge: "Backend", level: "Advanced", description: "FastAPI, Pandas ETL, web scrapers & automated pipelines" },
  { name: "Node.js", category: "Backend & Cloud", icon: "Server", badge: "Runtime", level: "Production", description: "Asynchronous backend microservices & CLI tooling" },
  { name: "Supabase", category: "Backend & Cloud", icon: "Database", badge: "BaaS", level: "Production", description: "PostgreSQL, Realtime websocket subscriptions, Auth & RLS" },
  { name: "Cloudflare", category: "Backend & Cloud", icon: "Globe", badge: "Edge", level: "Advanced", description: "Workers, DNS routing, Edge KV & cache acceleration" },
  { name: "Firebase", category: "Backend & Cloud", icon: "Zap", badge: "Realtime", level: "Proficient", description: "Firestore, Cloud Messaging & identity integration" },
  { name: "Vercel", category: "Backend & Cloud", icon: "Cloud", badge: "Hosting", level: "Daily Driver", description: "Continuous integration, edge deployments & serverless lambdas" },
  { name: "Render", category: "Backend & Cloud", icon: "Server", badge: "Cloud", level: "Production", description: "Docker web services, background workers & cron jobs" },

  // DevOps & Automation
  { name: "Docker", category: "DevOps & Automation", icon: "Boxes", badge: "DevOps", level: "Advanced", description: "Containerization, multi-stage builds & Docker Compose stacks" },
  { name: "Self-Hosted n8n", category: "DevOps & Automation", icon: "GitFork", badge: "Workflow", level: "Expert", description: "Autonomous webhook triggers, multi-step routing & API chaining" },
  { name: "Caddy Server", category: "DevOps & Automation", icon: "Shield", badge: "Proxy", level: "Advanced", description: "Zero-config automated TLS/HTTPS reverse proxies" },
  { name: "GitHub Actions", category: "DevOps & Automation", icon: "Play", badge: "CI/CD", level: "Production", description: "Automated test runs, build matrix & Pages deployment" },
  { name: "Google Apps Script", category: "DevOps & Automation", icon: "FileSpreadsheet", badge: "Enterprise", level: "Expert", description: "Headless Sheets, Docs, Gmail API & cron triggers" },

  // Hardware & Embedded
  { name: "Arduino Uno R4", category: "Hardware & Embedded", icon: "Cpu", badge: "Silicon", level: "Advanced", description: "32-bit ARM Cortex-M4, CAN bus & SPI display rendering" },
  { name: "Raspberry Pi", category: "Hardware & Embedded", icon: "Cpu", badge: "SBC", level: "Advanced", description: "Headless Linux servers, local IoT hubs & camera interfaces" },
  { name: "SPI / I2C TFT Displays", category: "Hardware & Embedded", icon: "Tv", badge: "Displays", level: "Advanced", description: "ST7789 / ILI9341 color graphic gauge rendering at 60 FPS" },
  { name: "Automotive Telemetry & Sensors", category: "Hardware & Embedded", icon: "Activity", badge: "IoT", level: "Hands-on", description: "Temperature, voltage dividers, hall-effect & auxiliary relays" }
];
