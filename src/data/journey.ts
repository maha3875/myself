import { TimelineMilestone } from '../types';

export const journeyMilestones: TimelineMilestone[] = [
  {
    year: "2010 – 2013",
    title: "Hardware Foundations & Network Genesis",
    role: "Computer Hardware & Network Technician",
    organization: "IT Support & Services",
    category: "foundation",
    description: "Built deep intuition for computing hardware from the ground up: motherboard component diagnostics, BIOS configurations, multi-OS dual boots, and laying the first structured Cat5e/Cat6 networks.",
    achievements: [
      "Assembled and maintained over 200+ custom PC workstations with zero failure rate.",
      "Configured small-business local area networks, switch patch bays, and dial-up/broadband gateways.",
      "Mastered low-level troubleshooting of storage drives, RAM failures, and peripheral interfacing."
    ],
    techStack: ["PC Hardware", "LAN / RJ45", "Windows XP / 7", "BIOS / CMOS", "Switching"]
  },
  {
    year: "2013 – 2016",
    title: "Campus Infrastructure & Windows Server Era",
    role: "Technical Assistant / Systems Administrator",
    organization: "Educational Institutions",
    category: "infrastructure",
    description: "Stepped up to institutional scale, taking ownership of complete school and college IT departments. Deployed Windows Server domain controllers, managed student computer labs, and interconnected campus blocks via fiber optics.",
    achievements: [
      "Configured Active Directory Domain Services (AD DS) and applied strict Group Policies for 400+ student terminals.",
      "Integrated biometric attendance devices and centralized campus network surveillance (CCTV over IP).",
      "Architected reliable 3-2-1 data backup routines using automated NAS storage and offline disk rotations."
    ],
    techStack: ["Windows Server 2012", "Active Directory", "Group Policy (GPO)", "Cisco Switches", "Fiber Optics", "NAS Backup"]
  },
  {
    year: "2016 – 2019",
    title: "Cloud Migration: Google Workspace & M365",
    role: "Lead IT Administrator & Cloud Specialist",
    organization: "Institutional Technology",
    category: "cloud",
    description: "Spearheaded the institutional shift from legacy on-premise email servers to enterprise cloud ecosystems. Migrated hundreds of teacher accounts and thousands of students into structured Google Workspace and Microsoft 365 environments.",
    achievements: [
      "Automated bulk user provisioning and student lifecycle management using GAM (Google Apps Manager) CLI.",
      "Conducted extensive training workshops for faculty on Google Classroom, Forms, and collaborative Drive folders.",
      "Configured SPF, DKIM, and DMARC DNS records to eliminate phishing and spoofed institutional communications."
    ],
    techStack: ["Google Workspace Admin", "GAM CLI", "Microsoft 365", "Azure AD", "Exchange Online", "Cloudflare DNS"]
  },
  {
    year: "2019 – 2022",
    title: "Automation Mastery & Platform Launches",
    role: "Automation Architect & Founder, TNKalvi",
    organization: "EdTech & Automation Initiatives",
    category: "automation",
    description: "Observed the countless hours wasted by administrative staff copying and pasting tabular data, preparing government EMIS reports, and dispatching circulars. Engineered bespoke Google Apps Script and Excel VBA macros that turned 8-hour weekly routines into 15-second one-click scripts.",
    achievements: [
      "Launched TNKalvi — providing educational updates, digital tools, and downloadable automation sheets for teachers across Tamil Nadu.",
      "Built automated Student Report Card and Marksheet Generators processing thousands of records with dynamic grading in seconds.",
      "Developed WhatsApp and SMS automated notice notification bots connecting parents with school event reminders."
    ],
    techStack: ["Google Apps Script", "Excel VBA", "Python", "Google Sheets API", "TNKalvi Platform", "WordPress"]
  },
  {
    year: "2022 – Present",
    title: "Modern Web, AI Workflows & TechPickers",
    role: "Senior Technical Consultant & Content Creator",
    organization: "TechPickers & Digital Innovation",
    category: "innovation",
    description: "Expanding into high-performance web applications, community knowledge creation, and AI workflow integration. Founded TechPickers to review modern hardware and productivity tools, while integrating LLMs into administrative workflows.",
    achievements: [
      "Scaled TechPickers into a trusted technology review and recommendation channel.",
      "Engineered AI-assisted document parsing pipelines reducing paperwork triage time by 75%.",
      "Published extensive educational video content and technical notes guiding thousands of educators and IT beginners."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Python Pandas", "YouTube Studio", "Cloud Automation"]
  }
];

