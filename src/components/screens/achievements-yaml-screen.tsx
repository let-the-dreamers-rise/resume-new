"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CodePanel, DetailFrame } from "@/components/portfolio/detail-frame";

const checks = ["research", "awards", "delivery"] as const;

export function AchievementsYamlScreen() {
  const { t } = useTranslation();

  return (
    <DetailFrame filename="achievements.yaml" size="1.04 KB">
      <CodePanel label="YAML / READ ONLY">
        <pre className="pr-24 text-[var(--app-text-secondary)]">
          <span className="block text-white">credentials:</span>
          <span className="block">  <span className="text-white">education:</span></span>
          <span className="block">    <span className="text-white">school:</span> <span className="text-[var(--app-primary)]">"VIT Bhopal University"</span></span>
          <span className="block">    <span className="text-white">degree:</span> <span className="text-[var(--app-primary)]">"B.Tech CSE (2024-2028)"</span></span>
          <span className="block">    <span className="text-white">gpa:</span> <span className="text-[var(--app-primary)]">"8.94 / 10.0"</span></span>
          <span className="block">    <span className="text-white">coursework:</span></span>
          <span className="block">      - Data Structures & Algorithms</span>
          <span className="block">      - Object-Oriented Programming</span>
          <span className="block">      - Operating Systems & Networks</span>
          <span className="block">  <span className="text-white">certifications:</span></span>
          <span className="block">    - NPTEL Gold & Silver Medals</span>
          <span className="block">    - Research Co-Author</span>
          <span className="block">    - 45+ International Hackathons</span>
          <span className="block">    - Meta PyTorch Hackathon Finalist</span>
        </pre>
      </CodePanel>
      <div className="space-y-2">
        <span className="block px-1 text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--app-text-muted)]">Third Party Verification</span>
        {checks.map((check) => (
          <div key={check} className="flex items-start gap-2.5 rounded-lg border border-[color:var(--app-border)] bg-[#13151A] p-3">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-[var(--app-success)]" aria-hidden />
            <div>
              <h2 className="text-xs font-bold text-white">{check === "research" ? "Research Co-Author" : check === "awards" ? "Awards & Certifications" : "Delivery Record"}</h2>
              <p className="mt-0.5 text-[11px] leading-relaxed text-[var(--app-text-secondary)] lg:text-sm">{t(`portfolio.achievements.${check}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </DetailFrame>
  );
}
