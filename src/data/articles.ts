import { ArticleItem } from '../types';

export const articlesData: ArticleItem[] = [
  {
    id: "zero-budget-school-automation",
    title: "The Zero-Budget School Automation Blueprint: Google Sheets & Apps Script",
    slug: "zero-budget-school-automation",
    publishDate: "October 2024",
    readTime: "6 min read",
    category: "Automation",
    summary: "How educational institutions can replace expensive, clunky ERP software with tailored, lightning-fast Google Workspace automations at zero recurring software cost.",
    tags: ["Google Apps Script", "Education", "Zero Cost", "Google Sheets"],
    content: [
      "Most educational institutions believe that digital transformation requires six-figure enterprise ERP licenses. In reality, proprietary school software is often bloated, rigid, and causes more friction for teachers than it solves.",
      "During my 14+ years managing institutional infrastructure, I found that teachers and staff already know how to use Google Sheets and Forms. By layering lightweight Google Apps Script triggers on top of familiar tools, we can build custom workflows that are faster, more reliable, and completely free.",
      "Key architectures include: 1) Event-driven triggers on Form submission for admission inquiries, 2) Scheduled triggers running every night at 11 PM to aggregate attendance logs and calculate student streaks, and 3) Headless PDF rendering using Google Docs templates and DriveApp."
    ],
    codeSample: {
      language: "javascript",
      code: `function setupNightlyConsolidation() {
  // Clear any existing nightly triggers
  ScriptApp.getProjectTriggers().forEach(trigger => {
    if (trigger.getHandlerFunction() === 'consolidateAttendance') {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  // Create an automatic cron trigger at 11 PM
  ScriptApp.newTrigger('consolidateAttendance')
    .timeBased()
    .atHour(23)
    .everyDays(1)
    .create();
}`
    }
  },
  {
    id: "mastering-gam-cli",
    title: "Mastering GAM CLI: Managing 5,000+ Google Workspace Users from the Terminal",
    slug: "mastering-gam-cli",
    publishDate: "August 2024",
    readTime: "8 min read",
    category: "System Administration",
    summary: "A practical sysadmin guide to Google Apps Manager (GAM) command line tool: automating bulk provisioning, organizational unit restructuring, and security auditing.",
    tags: ["GAM CLI", "Google Workspace", "SysAdmin", "Command Line"],
    content: [
      "Clicking through the Google Workspace Admin console GUI works fine when you have 10 employees. But when an academic institution admits 1,200 new students across 30 classrooms, GUI operations will take you entire weekends.",
      "GAM (Google Apps Manager) connects directly to Google's Admin SDK APIs via OAuth 2.0. With a single shell command or CSV pipeline, you can provision accounts, assign passwords, place students in specific Organizational Units, and populate Google Classrooms instantaneously.",
      "Always ensure your GAM environment uses service account delegation with least-privilege API scopes to safeguard institutional data."
    ],
    codeSample: {
      language: "bash",
      code: `# Bulk create student accounts from a standardized CSV roster
gam csv new_students_2024.csv gam create user ~Email firstname ~FirstName lastname ~LastName ou "/Students/Class_~Grade" password ~DefaultPassword changepassword on

# Add all students of Class 10A to their Google Classroom course
gam course 10A_MATH add students csv new_students_10a.csv:Email`
    }
  },
  {
    id: "bulletproof-campus-network",
    title: "Architecting a Resilient Campus Network on a Budget: VLANs, QoS & Firewalls",
    slug: "bulletproof-campus-network",
    publishDate: "May 2024",
    readTime: "7 min read",
    category: "Networking",
    summary: "How to segment student labs, administrative staff, and public Wi-Fi into isolated VLANs while prioritizing critical video feeds and VoIP traffic.",
    tags: ["Networking", "MikroTik", "VLAN", "Campus IT"],
    content: [
      "A common mistake in campus network setups is placing administrative computers, security CCTV cameras, and 500 student mobile devices on the same flat subnet (e.g. 192.168.1.0/24).",
      "Broadcast storms, IP conflicts, and security vulnerabilities will inevitably degrade the network. The solution is disciplined VLAN segmentation:",
      "• VLAN 10 (Admin & Accounts): Strict IP isolation, locked down to MAC addresses.\n• VLAN 20 (Faculty): High-priority bandwidth for Google Meet, interactive displays.\n• VLAN 30 (Student Lab): Isolated lab computers, web filtering for adult/gaming sites.\n• VLAN 40 (Campus Wi-Fi / Guest): Client isolation enabled, rate-limited to 2 Mbps per device.\n• VLAN 50 (CCTV & Biometrics): Dedicated non-routable private subnet with no internet access."
    ],
    codeSample: {
      language: "routeros",
      code: `# MikroTik VLAN creation & QoS Queue configuration
/interface vlan
add interface=bridge-lan name=VLAN10-Admin vlan-id=10
add interface=bridge-lan name=VLAN20-Staff vlan-id=20
add interface=bridge-lan name=VLAN30-Students vlan-id=30

/queue simple
add name="Guest-Rate-Limit" target=192.168.40.0/24 max-limit=20M/20M priority=8
add name="Staff-Priority" target=192.168.20.0/24 max-limit=100M/100M priority=2`
    }
  },
  {
    id: "email-security-spf-dkim-dmarc",
    title: "Stopping Spoofed Institutional Emails: The Definitive SPF, DKIM & DMARC Guide",
    slug: "email-security-spf-dkim-dmarc",
    publishDate: "January 2024",
    readTime: "5 min read",
    category: "Cloud Security",
    summary: "Why school and business emails end up in spam or get spoofed by bad actors, and the exact DNS records needed to achieve a 10/10 mail deliverability score.",
    tags: ["Security", "DNS", "Email Deliverability", "Cloudflare"],
    content: [
      "When attackers spoof a principal's or director's email address asking for emergency wire transfers or sensitive student records, weak DNS authentication is usually the culprit.",
      "Every modern domain must implement the three pillars of email security:",
      "1. SPF (Sender Policy Framework): Defines which mail servers (e.g. Google Workspace servers) are authorized to send emails on your domain's behalf.\n2. DKIM (DomainKeys Identified Mail): Cryptographically signs outgoing emails with a 2048-bit key.\n3. DMARC: Instructs recipient mail servers (Gmail, Outlook, Yahoo) to reject or quarantine emails that fail SPF or DKIM alignment."
    ],
    codeSample: {
      language: "dns",
      code: `# 1. SPF Record (TXT @)
v=spf1 include:_spf.google.com ~all

# 2. DKIM Record (TXT google._domainkey)
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3f...

# 3. DMARC Policy (TXT _dmarc)
v=DMARC1; p=reject; rua=mailto:dmarc-reports@maharajanc.com; pct=100; aspf=r;`
    }
  }
];

