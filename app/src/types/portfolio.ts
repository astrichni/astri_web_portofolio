export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Data Analytics' | 'NLP & ML' | 'Supply Chain' | 'BI Dashboards';
  description: string;
  longDescription: string;
  keyMetric: string;
  metricLabel: string;
  tags: string[];
  tools: string[];
  color: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  problemStatement?: string;
  methodology?: string[];
  businessImpact?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    description: string;
  }[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'Data Analysis' | 'Supply Chain' | 'Industrial Eng' | 'NLP & AI';
  color: string;
  featured: boolean;
  link?: string;
}

export interface Book {
  title: string;
  author: string;
  description: string;
  rating: number;
  pages: string;
  category: 'Data & Analytics' | 'Supply Chain' | 'Engineering' | 'Productivity';
  color: string;
}
