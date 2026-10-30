export interface SkillItem {
  name: string;
  level: number; // 1-100
  experienceYears: number;
  highlight?: string;
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  role: string;
  organization?: string;
  category: 'foundation' | 'infrastructure' | 'cloud' | 'automation' | 'innovation';
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Educational Platform' | 'Automation System' | 'Web & Media' | 'Infrastructure';
  badge: string;
  summary: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface AutomationDemo {
  id: string;
  title: string;
  badge: string;
  platform: 'Google Apps Script' | 'Excel VBA' | 'Python' | 'REST API / Webhook';
  problem: string;
  solution: string;
  timeSaved: string; // e.g. "8 hrs/week → 20 secs"
  manualDuration: number; // in minutes
  automatedDuration: number; // in seconds
  snippet: string;
  simulatedActionName: string;
  demoType: 'sheets-workflow' | 'vba-optimizer' | 'python-pipeline' | 'notification-dispatcher';
}

export interface ContentVideo {
  id: string;
  title: string;
  channel: string;
  duration: string;
  views: string;
  category: 'Google Workspace' | 'Automation & Excel' | 'IT & Networking' | 'Tech Guides';
  description: string;
  tags: string[];
  url?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  publishDate: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
  codeSample?: {
    language: string;
    code: string;
  };
  tags: string[];
}

