import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "techpickers",
    title: "TechPickers",
    tagline: "Curated Technology & Gadget Discovery Platform",
    category: "Web & Media",
    badge: "Featured Platform",
    featured: true,
    accentColor: "from-cyan-500 to-blue-600",
    summary: "A modern technology media and product curation hub focused on practical IT gear, computer hardware reviews, and digital productivity tools.",
    fullOverview: "TechPickers was established to bridge the gap between technical specs and real-world everyday utility. Through in-depth hardware benchmarks, networking gear teardowns, and productivity software walkthroughs, TechPickers helps IT practitioners and everyday tech buyers make well-informed investments.",
    challenge: "Buyers often struggle with marketing jargon and conflicting reviews when choosing networking routers, office PCs, or cloud tools suited for budget-conscious schools and SMBs.",
    solution: "Designed a clean, content-first web portal with categorized gear guides, interactive comparison tables, and companion video walkthroughs.",
    impactMetrics: [
      { label: "Community Views", value: "250K+" },
      { label: "Hardware Guides", value: "100+" },
      { label: "Recommendation Accuracy", value: "99%" }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "WordPress CMS", "SEO Analytics", "YouTube Integration"],
    liveUrl: "https://techpickers.com"
  },
  {
    id: "tnkalvi",
    title: "TNKalvi",
    tagline: "Educational Resource & Teacher Automation Ecosystem",
    category: "Educational Platform",
    badge: "Community Hub",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    summary: "Dedicated educational portal providing Tamil Nadu educators and students with official circulars, digital study materials, and one-click automation spreadsheets.",
    fullOverview: "TNKalvi was born out of direct exposure to the administrative hurdles faced by government and matriculation school teachers. Beyond publishing key educational notifications, TNKalvi delivers downloadable Google Sheets and Excel utilities that automate salary slips, marksheet calculations, and EMIS compliance.",
    challenge: "Teachers spent evenings manually calculating grade percentages and compiling government compliance registers instead of focusing on classroom instruction.",
    solution: "Created an easy-to-use digital portal hosting free, pre-configured automation templates with embedded formulas and Apps Script triggers, accompanied by step-by-step video tutorials.",
    impactMetrics: [
      { label: "Educators Reached", value: "40K+" },
      { label: "Time Saved / Teacher", value: "~6 hrs/wk" },
      { label: "Templates Downloaded", value: "15,000+" }
    ],
    technologies: ["WordPress", "Google Sheets API", "PHP", "Cloudflare CDN", "Google Drive", "YouTube"],
    liveUrl: "https://tnkalvi.com"
  },
  {
    id: "exam-report-engine",
    title: "Automated Exam Analytics & Report Card Engine",
    tagline: "Bulk Marksheet Processing & PDF Generation System",
    category: "Automation System",
    badge: "Core Automation",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600",
    summary: "Custom Google Apps Script & Python system that ingests raw examination scores, computes percentiles, ranks students, and exports individualized print-ready PDF report cards.",
    fullOverview: "Built for institutional exam departments handling 1,500+ students per term. The system accepts teacher marks via standard Google Forms or synced Sheets, runs statistical normalization, flags failing thresholds, generates teacher remarks dynamically, and produces watermarked PDF report cards stored automatically in per-class Google Drive folders.",
    challenge: "The manual generation of term report cards took a team of 10 teachers 3 full days of printing, proofreading, and calculating rankings by hand.",
    solution: "A unified Apps Script trigger that compiles data with mathematical precision and prints 1,500 custom PDF cards in under 12 minutes, complete with QR code verification.",
    impactMetrics: [
      { label: "Processing Speed", value: "1,500 in 12 min" },
      { label: "Calculation Errors", value: "0% (Eliminated)" },
      { label: "Paper Waste Saved", value: "80%" }
    ],
    technologies: ["Google Apps Script", "Google Drive API", "PDF Services", "VBA Macro", "Data Validation"],
    githubUrl: "https://github.com/maha3875"
  },
  {
    id: "workspace-gam-provisioner",
    title: "Google Workspace Bulk Provisioner (GAM CLI)",
    tagline: "Automated Student & Staff Identity Lifecycle Engine",
    category: "Infrastructure",
    badge: "Cloud SysAdmin",
    featured: false,
    accentColor: "from-blue-500 to-cyan-500",
    summary: "Automated batch CLI pipeline connecting school enrollment spreadsheets to Google Workspace, auto-provisioning Google IDs, shared drives, and Classroom rosters.",
    fullOverview: "A robust set of shell and Python scripts wrapping the Google Apps Manager (GAM) command line. When a new academic year begins, the script reads an approved admissions roster, provisions unique student emails, assigns the appropriate Organizational Unit (OU), sets password recovery emails, and enlists students in their respective Google Classrooms.",
    challenge: "Manual creation of 800+ new student and faculty accounts every academic cycle was exhausting and error-prone.",
    solution: "Scripted batch orchestration executing GAM commands with rate-limiting, error logging, and welcome packet generation sent straight to guardians.",
    impactMetrics: [
      { label: "Onboarding Time", value: "2 days → 15 mins" },
      { label: "Accounts Managed", value: "5,000+" },
      { label: "Security Adherence", value: "100% 2FA" }
    ],
    technologies: ["GAM CLI", "Bash Scripting", "Python", "Google Admin SDK", "OAuth 2.0"]
  },
  {
    id: "biometric-attendance-sync",
    title: "Biometric Attendance & Parent SMS Alert Pipeline",
    tagline: "IoT Biometric Machine to Cloud Sheets & SMS Gateway",
    category: "Automation System",
    badge: "IoT & ETL",
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
    summary: "Automated ETL script that polls hardware biometric punch machines via TCP/IP sockets, updates attendance registries, and dispatches SMS alerts to parents of absentees.",
    fullOverview: "Hardware biometric machines in campus buildings stored punches locally. This solution runs a lightweight Python background service on the local server that connects to the biometric SDK, pulls time-logs at 9:00 AM, flags absent pupils, posts to Google Sheets, and triggers a transactional SMS gateway API.",
    challenge: "School administrative staff had to export thumbprint files via USB pen drives every morning to check student presence.",
    solution: "End-to-end autonomous socket communication with failover retry queue, instant parent notification, and cloud mirror.",
    impactMetrics: [
      { label: "Morning Latency", value: "< 90 seconds" },
      { label: "Parent Notification Rate", value: "99.8%" },
      { label: "Manual Effort", value: "Zero" }
    ],
    technologies: ["Python Sockets", "ZKTeco SDK", "SMS Gateway REST API", "Google Sheets API", "Cron Daemon"]
  },
  {
    id: "smart-fee-tracker",
    title: "Institutional Fee Ledger & Smart WhatsApp Notifier",
    tagline: "Automated Financial Reconciliation & Reminder Dispatcher",
    category: "Automation System",
    badge: "Finance Tech",
    featured: false,
    accentColor: "from-teal-500 to-emerald-600",
    summary: "Google Sheets and Apps Script finance tracking suite that categorizes fee installments, auto-computes dues, and generates personalized WhatsApp payment receipts.",
    fullOverview: "Manages student fee ledgers across multiple installments (tuition, transport, lab). It reconciles bank statements with student IDs, calculates pending dues, and features a one-click WhatsApp web API dispatch that delivers personalized balance summaries to parents.",
    challenge: "Phone calls and handwritten notices for overdue balances led to disputes, miscalculations, and delayed collections.",
    solution: "A transparent, tamper-proof spreadsheet model with protected ranges, automated audit log, and instant messaging bridge.",
    impactMetrics: [
      { label: "Collection Speed", value: "+35% on-time" },
      { label: "Reconciliation Time", value: "-90%" },
      { label: "Record Accuracy", value: "100%" }
    ],
    technologies: ["Google Apps Script", "WhatsApp API", "Google Sheets", "VBA Formulas"]
  }
];

