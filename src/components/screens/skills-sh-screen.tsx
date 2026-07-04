"use client";

import { CheckCircle, Server } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CodePanel, DetailFrame } from "@/components/portfolio/detail-frame";
import { skillGroups } from "@/lib/portfolio-data";

export function SkillsShScreen() {
  const { t } = useTranslation();

  return (
    <DetailFrame filename="skills.sh" size="BASH SCRIPT">
      <CodePanel label="SH / EXECUTABLE">
        <pre className="space-y-1 pr-24 text-[var(--app-text-secondary)]">
          <span className="block italic text-[var(--app-success)]">#!/bin/bash</span>
          <span className="block italic text-[var(--app-success)]"># Querying Ashwin's stack capabilities...</span>
          <span className="block pt-3">echo <span className="text-[var(--app-primary)]">"=== LANGUAGES ==="</span></span>
          <span className="block">echo "Java           [####################] 95%"</span>
          <span className="block">echo "C++            [##################--] 90%"</span>
          <span className="block">echo "TypeScript     [##################--] 90%"</span>
          <span className="block">echo "Python / SQL   [##############------] 70%"</span>
          <span className="block pt-3">echo <span className="text-[var(--app-primary)]">"=== BACKEND & INFRASTRUCTURE ==="</span></span>
          <span className="block">echo "Node.js/Express, FastAPI, Next.js"</span>
          <span className="block">echo "PostgreSQL, Redis, Supabase, AWS"</span>
          <span className="block pt-3">echo <span className="text-[var(--app-primary)]">"=== DESIGN SYSTEMS ==="</span></span>
          <span className="block">echo "Typography, layout rhythm, interface composition"</span>
        </pre>
      </CodePanel>
      <div className="space-y-3">
        <span className="block px-1 text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--app-text-muted)]">Engineered Tooling Matrix</span>
        <div className="grid gap-3 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.key} className="space-y-2 rounded-lg border border-[color:var(--app-border)] bg-[#13151A] p-3">
              <h2 className="flex items-center gap-2 text-xs font-bold text-white">
                {group.key === "design" ? <CheckCircle className="h-3 w-3 text-[var(--app-primary)]" aria-hidden /> : <Server className="h-3 w-3 text-[var(--app-primary)]" aria-hidden />}
                {t(`portfolio.skills.${group.key}`)}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="rounded bg-[var(--app-border)] px-2 py-0.5 text-[10px] text-[var(--app-text-secondary)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DetailFrame>
  );
}
