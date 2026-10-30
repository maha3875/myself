import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: "networking",
    title: "Networking & Infrastructure",
    icon: "Network",
    description: "Robust campus and office network design, security policies, high-availability routing, and wireless infrastructure.",
    skills: [
      { name: "LAN / WAN Architecture & Structured Cabling", level: 95, experienceYears: 14, highlight: "Designed high-bandwidth campus networks", tags: ["Cat6", "Fiber", "Patch Panels"] },
      { name: "Router & Firewall Configuration", level: 90, experienceYears: 12, highlight: "MikroTik, Cisco, pfSense, TP-Link Omada", tags: ["VLAN", "NAT", "QoS", "Failover"] },
      { name: "DNS, DHCP & Subnetting", level: 95, experienceYears: 14, highlight: "Internal DNS servers, static IP pools & leasing", tags: ["Bake-in", "Security"] },
      { name: "Enterprise Wi-Fi Deployment", level: 90, experienceYears: 10, highlight: "Multi-AP roaming, Ubiquiti UniFi, captive portals", tags: ["UniFi", "Seamless Roaming"] },
      { name: "VPN & Secure Remote Access", level: 85, experienceYears: 8, highlight: "IPsec, OpenVPN, WireGuard site-to-site bridges", tags: ["Remote Work", "Encryption"] }
    ]
  },
  {
    id: "sysadmin",
    title: "System Administration",
    icon: "Server",
    description: "Comprehensive lifecycle administration of physical servers, virtual machines, directory services, and disaster recovery.",
    skills: [
      { name: "Windows Server Administration", level: 95, experienceYears: 13, highlight: "Active Directory, Domain Controllers, GPO policies", tags: ["AD DS", "Group Policy", "RDS"] },
      { name: "Linux Server Administration", level: 88, experienceYears: 10, highlight: "Ubuntu/Debian, CentOS, Apache/Nginx, SSH hardening", tags: ["Ubuntu", "Bash", "Cron"] },
      { name: "Virtualization & Hypervisors", level: 85, experienceYears: 8, highlight: "Proxmox VE, Hyper-V, containerized services", tags: ["Proxmox", "KVM", "Snapshots"] },
      { name: "Backup Strategies & Disaster Recovery", level: 92, experienceYears: 12, highlight: "3-2-1 backup policies, automated NAS syncing", tags: ["Veeam", "NAS", "Synology"] },
      { name: "Hardware Diagnostics & Fleet Maintenance", level: 98, experienceYears: 14, highlight: "Zero-downtime maintenance of 300+ workstations", tags: ["Diagnostics", "Bench Testing"] }
    ]
  },
  {
    id: "google-workspace",
    title: "Google Workspace",
    icon: "Cloud",
    description: "Deep tenant administration, security compliance, bulk identity lifecycle, and ecosystem integrations.",
    skills: [
      { name: "Google Admin Console Architecture", level: 96, experienceYears: 10, highlight: "Org Unit (OU) structures, 2FA policies, DLP", tags: ["OU Management", "Security Rules"] },
      { name: "GAM (Google Apps Manager) CLI", level: 92, experienceYears: 8, highlight: "Scripted batch user provisioning and license management", tags: ["GAM CLI", "Bulk Ops"] },
      { name: "Shared Drives & Access Governance", level: 94, experienceYears: 9, highlight: "Enterprise file governance, auditing & external sharing", tags: ["Shared Drives", "Audit Logs"] },
      { name: "Google Classroom & EdTech Deployment", level: 95, experienceYears: 9, highlight: "Curriculum integration, teacher-student sync", tags: ["EdTech", "Classroom Sync"] },
      { name: "Email Routing & Anti-Spam (SPF, DKIM, DMARC)", level: 92, experienceYears: 9, highlight: "Zero email spoofing, high deliverability", tags: ["SPF", "DKIM", "DMARC"] }
    ]
  },
  {
    id: "microsoft-365",
    title: "Microsoft 365",
    icon: "Briefcase",
    description: "Modern cloud productivity setup, identity federation, collaboration governance, and device management.",
    skills: [
      { name: "Microsoft 365 Admin & License Optimization", level: 90, experienceYears: 8, highlight: "Tenant management, cost reduction & seat allocation", tags: ["M365 Admin", "Tenant Health"] },
      { name: "Microsoft Entra ID (Azure AD)", level: 88, experienceYears: 7, highlight: "Single Sign-On (SSO), hybrid sync, conditional access", tags: ["Entra ID", "SSO", "MFA"] },
      { name: "Exchange Online & Mail Flow", level: 90, experienceYears: 8, highlight: "Distribution lists, shared mailboxes, retention rules", tags: ["Exchange", "Mail Routing"] },
      { name: "SharePoint Online & Microsoft Teams", level: 88, experienceYears: 7, highlight: "Departmental team channels, permission inheritance", tags: ["SharePoint", "Teams Admin"] },
      { name: "PowerShell for M365", level: 85, experienceYears: 6, highlight: "Automating repetitive tenant administration tasks", tags: ["ExchangePowerShell", "AzModule"] }
    ]
  },
  {
    id: "automation",
    title: "Automation & Scripting",
    icon: "Zap",
    description: "Writing lightweight, reliable code to convert multi-hour repetitive manual chores into instant automated workflows.",
    skills: [
      { name: "Google Apps Script (GAS)", level: 96, experienceYears: 9, highlight: "Custom triggers, Sheets-to-Docs, automated mail merge", tags: ["GAS", "Triggers", "Gmail API"] },
      { name: "Python for Automation", level: 88, experienceYears: 6, highlight: "Data extraction, Pandas, report generation, web scrapers", tags: ["Python 3", "Pandas", "Automation"] },
      { name: "Excel VBA & Advanced Macros", level: 94, experienceYears: 12, highlight: "Complex institutional reporting and financial trackers", tags: ["VBA", "UserForms", "Formulas"] },
      { name: "PowerShell & Windows Batch", level: 88, experienceYears: 11, highlight: "Automated workstation imaging, software rollouts", tags: ["PowerShell", ".bat", "Silent Installs"] },
      { name: "REST APIs, Webhooks & Notifications", level: 86, experienceYears: 5, highlight: "WhatsApp API, Telegram bots, SMS gateways", tags: ["Webhooks", "JSON", "APIs"] }
    ]
  },
  {
    id: "web-tech",
    title: "Web Technology & Platforms",
    icon: "Globe",
    description: "Designing fast, responsive web portals, knowledge repositories, and managing public DNS and hosting.",
    skills: [
      { name: "Modern Web Development (React, Vite, Tailwind)", level: 86, experienceYears: 4, highlight: "Building interactive, high-performance web frontends", tags: ["React", "TypeScript", "Tailwind"] },
      { name: "WordPress & CMS Deployment", level: 92, experienceYears: 10, highlight: "Custom theme tuning, speed optimization, security hardening", tags: ["WordPress", "SEO", "cPanel"] },
      { name: "DNS, CDN & Domain Governance", level: 95, experienceYears: 12, highlight: "Cloudflare setup, SSL certificates, propagation management", tags: ["Cloudflare", "DNS Records", "SSL"] },
      { name: "Web Performance & SEO Optimization", level: 88, experienceYears: 8, highlight: "Core Web Vitals, caching, meta-structuring", tags: ["Lighthouse", "SEO", "Cache"] }
    ]
  },
  {
    id: "ai-emerging",
    title: "AI & Digital Innovation",
    icon: "Cpu",
    description: "Leveraging generative AI and smart assistive tools to amplify productivity, education, and technical support.",
    skills: [
      { name: "AI Workflow Integration & Prompt Engineering", level: 90, experienceYears: 3, highlight: "Synthesizing educational content & administrative drafting", tags: ["Prompting", "Workflow AI"] },
      { name: "Gemini API & LLM Tooling", level: 85, experienceYears: 2, highlight: "Automating document summarization & data classification", tags: ["Gemini API", "JSON Schema"] },
      { name: "Intelligent Document Automation", level: 88, experienceYears: 4, highlight: "OCR scanning, certificate generation, formula synthesizers", tags: ["OCR", "Automated PDF"] },
      { name: "Educational Technology Innovation", level: 94, experienceYears: 10, highlight: "Bridging government portals (EMIS, TNKalvi) and digital classrooms", tags: ["EMIS", "Digital Classrooms"] }
    ]
  }
];

