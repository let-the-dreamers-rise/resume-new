import type { LucideIcon } from "lucide-react";
import { Award, Briefcase, Code2, FileJson, FileText, Gauge, Mail, Terminal, User } from "lucide-react";

export type PortfolioRoute = {
  key: string;
  path: string;
  labelKey: string;
  command: string;
  metaKey: string;
  icon: LucideIcon;
};

export const portfolioRoutes: PortfolioRoute[] = [
  {
    key: "profile-json",
    path: "/profile-json",
    labelKey: "portfolio.files.profile.name",
    command: "open profile.json",
    metaKey: "portfolio.files.profile.meta",
    icon: FileJson,
  },
  {
    key: "projects-md",
    path: "/projects-md",
    labelKey: "portfolio.files.projects.name",
    command: "open projects.md",
    metaKey: "portfolio.files.projects.meta",
    icon: FileText,
  },
  {
    key: "experience-json",
    path: "/experience-json",
    labelKey: "portfolio.files.experience.name",
    command: "open experience.json",
    metaKey: "portfolio.files.experience.meta",
    icon: Briefcase,
  },
  {
    key: "skills-sh",
    path: "/skills-sh",
    labelKey: "portfolio.files.skills.name",
    command: "run skills.sh",
    metaKey: "portfolio.files.skills.meta",
    icon: Code2,
  },
  {
    key: "achievements-yaml",
    path: "/achievements-yaml",
    labelKey: "portfolio.files.achievements.name",
    command: "cat achievements.yaml",
    metaKey: "portfolio.files.achievements.meta",
    icon: Award,
  },
  {
    key: "telemetry-log",
    path: "/telemetry-log",
    labelKey: "portfolio.files.telemetry.name",
    command: "tail telemetry.log",
    metaKey: "portfolio.files.telemetry.meta",
    icon: Gauge,
  },
];

export const shellActions = [
  {
    key: "contact",
    path: "/contact-modal",
    labelKey: "portfolio.actions.contact",
    icon: Mail,
    variant: "ghost" as const,
  },
  {
    key: "hire",
    path: "/hire-modal",
    labelKey: "portfolio.actions.hire",
    icon: Terminal,
    variant: "primary" as const,
  },
];

export const portfolioStats = [
  { labelKey: "portfolio.metrics.shipped.label", valueKey: "portfolio.metrics.shipped.value" },
  { labelKey: "portfolio.metrics.hackathons.label", valueKey: "portfolio.metrics.hackathons.value" },
  { labelKey: "portfolio.metrics.experience.label", valueKey: "portfolio.metrics.experience.value" },
];

export const profileFacts = [
  { labelKey: "portfolio.profileFacts.role", valueKey: "portfolio.hero.title", icon: User },
  { labelKey: "portfolio.profileFacts.target", valueKey: "portfolio.hero.target", icon: Terminal },
  { labelKey: "portfolio.profileFacts.location", valueKey: "portfolio.hero.location", icon: Gauge },
];

export const projects = [
  {
    name: "BidPilot",
    years: "2025-2026",
    url: "bidpilots.in",
    tag: "AI Procurement",
    bullets: ["portfolio.projects.bidpilot.b1", "portfolio.projects.bidpilot.b2", "portfolio.projects.bidpilot.b3"],
  },
  {
    name: "ZARYNX",
    years: "2026",
    tag: "Agent Governance",
    bullets: ["portfolio.projects.zarynx.b1", "portfolio.projects.zarynx.b2"],
  },
  {
    name: "DreamOS",
    years: "2025-2026",
    tag: "Privacy Data Platform",
    bullets: ["portfolio.projects.dreamos.b1", "portfolio.projects.dreamos.b2"],
  },
  {
    name: "Foundry",
    years: "2026",
    tag: "Inference Gateway",
    bullets: ["portfolio.projects.foundry.b1", "portfolio.projects.foundry.b2"],
  },
];

export const skillGroups = [
  { key: "languages", items: ["Java", "C++", "TypeScript", "JavaScript", "Python", "SQL"] },
  { key: "engineering", items: ["OOP", "REST APIs", "System Design", "Unit Testing", "GitHub Actions", "Docker", "CI/CD"] },
  { key: "stack", items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "PostgreSQL", "Redis", "AWS", "Supabase"] },
  { key: "fundamentals", items: ["Data Structures", "Algorithms", "BFS", "Complexity Analysis"] },
  { key: "design", items: ["Typography", "Visual Systems", "Interface Composition", "Brand Direction"] },
];

export const telemetryRows = [
  ["tests.policy_contracts", "4/4", "stable"],
  ["systems.shipped", "60+", "verified"],
  ["hackathon.delivery", "45+", "active"],
  ["cgpa.current", "8.94", "locked"],
  ["privacy.controls", "RLS + audit", "implemented"],
];
