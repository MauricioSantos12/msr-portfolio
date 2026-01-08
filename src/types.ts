export type Language = "EN" | "ES";
export type Theme = "light" | "dark";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeUrl: string;
  pageUrl?: string;
}

export interface Skill {
  name: {
    [key in Language]: string;
  };
  icon: any;
  type: "technical" | "soft";
}

export interface Milestone {
  role: string;
  company: string;
  date: string;
  description: string;
}

export interface Translation {
  nav: {
    hero: string;
    skills: string;
    timeline: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    downLoadCV: string;
  };
  skills: {
    title: string;
    technical: string;
    soft: string;
  };
  timeline: {
    title: string;
  };
  projects: {
    title: string;
    viewCode: string;
    pageUrl: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
  footer: {
    backToTop: string;
  };
}
