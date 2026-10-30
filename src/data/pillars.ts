export interface BentoPillar {
  id: string;
  title: string;
  tagline: string;
  category: string;
  icon: string;
  accent: string;
  borderGlow: string;
  description: string;
  technologies: string[];
  keyHighlights: string[];
  statsBadge: string;
  interactiveSnippet?: {
    label: string;
    code: string;
  };
}

export const bentoPillars: BentoPillar[] = [
  {
    id: "web-edge",
    title: "Web & Edge Systems",
    tagline: "High-concurrency full-stack architectures deployed at the edge",
    category: "Full-Stack Development",
    icon: "Globe",
    accent: "from-cyan-500 to-blue-600",
    borderGlow: "group-hover:border-cyan-500/50",
    description: "Crafting zero-latency web applications using Next.js, React, Tailwind CSS, and TypeScript. Backed by Supabase PostgreSQL for real-time data and Cloudflare Workers for sub-millisecond edge compute.",
    technologies: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "Supabase", "Cloudflare Workers", "Vercel"],
    keyHighlights: [
      "Sub-millisecond global cache distribution via Cloudflare Workers",
      "Real-time database triggers, Row Level Security (RLS) & Auth via Supabase",
      "High-velocity client UX with responsive glassmorphism interfaces"
    ],
    statsBadge: "Edge-First",
    interactiveSnippet: {
      label: "cloudflare-worker.ts",
      code: `export default {
  async fetch(request, env) {
    const cache = caches.default;
    let response = await cache.match(request);
    if (!response) {
      response = await fetch(request);
      response = new Response(response.body, response);
      response.headers.set('Cache-Control', 's-maxage=3600');
      await cache.put(request, response.clone());
    }
    return response;
  }
};`
    }
  },
  {
    id: "autonomous-automation",
    title: "Autonomous Automation",
    tagline: "Self-hosted orchestration engines & zero-toil ETL pipelines",
    category: "Systems & DevOps",
    icon: "Zap",
    accent: "from-emerald-400 to-teal-600",
    borderGlow: "group-hover:border-emerald-500/50",
    description: "Eliminating manual bottlenecks with self-hosted n8n running on Docker behind automated Caddy TLS proxies. Blended with Python asynchronous scripts and Google Apps Script triggers.",
    technologies: ["Self-Hosted n8n", "Docker", "Caddy Server", "Python (Pandas/FastAPI)", "Google Apps Script", "Webhooks"],
    keyHighlights: [
      "Self-hosted n8n container cluster managed with Docker Compose & automated backups",
      "Automated SSL certificates & reverse proxy routing via Caddy Server",
      "Bespoke Python pipelines processing multi-gigabyte data dumps into clean JSON/Postgres",
      "Institutional Google Apps Script workflows executing across 1,500+ records"
    ],
    statsBadge: "Zero-Toil",
    interactiveSnippet: {
      label: "docker-compose.yml",
      code: `services:
  caddy:
    image: caddy:latest
    restart: unless-stopped
    ports: ["80:80", "443:443"]
    volumes: ["./Caddyfile:/etc/caddy/Caddyfile", "caddy_data:/data"]
  n8n:
    image: n8nio/n8n:latest
    restart: always
    environment:
      - N8N_HOST=n8n.internal.io
      - WEBHOOK_URL=https://n8n.internal.io/
    volumes: ["n8n_data:/home/node/.n8n"]`
    }
  },
  {
    id: "embedded-hardware",
    title: "Embedded & Hardware Prototyping",
    tagline: "Silicon tinkering, micro-controllers, TFT dashboards & telemetry",
    category: "Hardware Engineering",
    icon: "Cpu",
    accent: "from-amber-400 to-orange-600",
    borderGlow: "group-hover:border-amber-500/50",
    description: "Bridging code with physical hardware. Programming Arduino Uno R4 (RA4M1 32-bit ARM Cortex) and Raspberry Pi boards to drive high-refresh SPI TFT displays, environmental sensor arrays, and automotive electronics telemetry.",
    technologies: ["Arduino Uno R4", "Raspberry Pi", "SPI / I2C TFT Displays", "C / C++", "MicroPython", "Automotive CAN / OBD", "Sensors"],
    keyHighlights: [
      "Real-time sensor telemetry & interactive UI gauge rendering on SPI TFT panels",
      "Automotive electronics tinkering: auxiliary power management & digital HUD gauges",
      "Dual-core / 32-bit embedded routines with low-power sleep state management"
    ],
    statsBadge: "Physical Silicon",
    interactiveSnippet: {
      label: "tft_telemetry.ino",
      code: `#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7789.h>

Adafruit_ST7789 tft = Adafruit_ST7789(TFT_CS, TFT_DC, TFT_RST);

void setup() {
  tft.init(240, 320);
  tft.fillScreen(ST77XX_BLACK);
  tft.setTextColor(ST77XX_CYAN);
  tft.setTextSize(2);
  tft.setCursor(10, 10);
  tft.println("TELEMETRY: ONLINE");
}`
    }
  },
  {
    id: "digital-media-animation",
    title: "Digital Media & 3D Animation",
    tagline: "High-energy storytelling, 3D skits & creator tech channels",
    category: "Creative Media",
    icon: "Video",
    accent: "from-purple-500 to-pink-600",
    borderGlow: "group-hover:border-purple-500/50",
    description: "Creator and director behind 3D animated comedy and storytelling skits at Last Bench Creators, alongside tech teardown masterclasses on Maha Techz and Maha Tech Automation.",
    technologies: ["Blender 3D", "Unreal Engine", "Premiere Pro", "After Effects", "YouTube Studio", "Audio Synthesis"],
    keyHighlights: [
      "Last Bench Creators: 3D animated relatable campus & tech skits with custom character rigging",
      "Maha Techz: Consumer electronics deep-dives, hardware teardowns & PC build optimizations",
      "Maha Tech Automation: Developer tutorials on n8n, Python automation & Google Workspace"
    ],
    statsBadge: "Creator Ecosystem",
    interactiveSnippet: {
      label: "creator_channels.json",
      code: `{
  "channels": [
    { "name": "Maha Techz", "niche": "Tech Hardware & Reviews" },
    { "name": "Maha Tech Automation", "niche": "No-Code & Python Workflows" },
    { "name": "Last Bench Creators", "niche": "3D Animated Creative Skits" }
  ]
}`
    }
  }
];
