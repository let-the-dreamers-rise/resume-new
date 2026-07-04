"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { DetailFrame } from "@/components/portfolio/detail-frame";
import { projects } from "@/lib/portfolio-data";

const tech: Record<string, string[]> = {
  BidPilot: ["NLP", "Document AI", "PostgreSQL", "Workflow Systems"],
  ZARYNX: ["TypeScript", "Node.js", "JWT", "Auth0", "Policy Logs"],
  DreamOS: ["React", "TypeScript", "Supabase", "RLS", "BFS"],
  Foundry: ["Express", "Drizzle ORM", "PostgreSQL", "REST API", "OpenAI SDK"],
};

export function ProjectsMdScreen() {
  const { t } = useTranslation();

  return (
    <DetailFrame filename="projects.md" size="MD PARSED">
      <div className="border-b border-[color:var(--app-border)] pb-2">
        <h1 className="text-sm font-bold uppercase tracking-[0.05em] text-white">## {t("portfolio.sections.projects")}</h1>
        <p className="mt-1 text-[10px] text-[var(--app-text-secondary)]">Demonstrated architecture outcomes and code standards validation.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.22 }}
            whileHover={{ y: -2 }}
            className="space-y-3 rounded-lg border border-[color:var(--app-border)] bg-[var(--app-surface)] p-4 hover:border-[color:var(--app-primary)]/50"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xs font-bold text-[var(--app-primary)]">{String(index + 1).padStart(2, "0")} // {project.name}</h2>
              <span className="rounded border border-[color:var(--app-primary)]/30 bg-[var(--app-primary)]/10 px-2 py-0.5 text-[10px] text-[var(--app-primary)]">
                {project.tag}
              </span>
            </div>
            <div className="space-y-2 text-xs leading-relaxed text-[var(--app-text-secondary)]">
              {project.bullets.map((bullet) => (
                <p key={bullet}>- {t(bullet)}</p>
              ))}
            </div>
            <div className="rounded border border-[color:var(--app-border)] bg-[#13151A] p-2.5 text-[11px]">
              <span className="mb-1 block font-bold text-[var(--app-text)]">Telemetry Outcome:</span>
              <span className="text-[var(--app-success)]">{project.years}{project.url ? ` / ${project.url}` : ""}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(tech[project.name] ?? []).map((item) => (
                <span key={item} className="rounded bg-[var(--app-border)] px-2 py-0.5 text-[10px] text-[var(--app-text-secondary)]">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </DetailFrame>
  );
}
