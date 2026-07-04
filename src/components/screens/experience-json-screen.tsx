"use client";

import { useTranslation } from "react-i18next";
import { CodePanel, DetailFrame, Line } from "@/components/portfolio/detail-frame";

const rows = [
  ["01", "{"],
  ["02", "  \"role\": \"Co-Founder & Tech Lead\","],
  ["03", "  \"org\": \"Project Samvardhanam\","],
  ["04", "  \"focus\": \"Social Donation Infrastructure\","],
  ["05", "  \"contributions\": ["],
  ["06", "    {"],
  ["07", "      \"system\": \"Volunteer Routing Engine\","],
  ["08", "      \"impact\": \"Volunteer onboarding and routing\""],
  ["09", "    },"],
  ["10", "    {"],
  ["11", "      \"system\": \"Realtime Analytics\","],
  ["12", "      \"impact\": \"Dashboard for donation tracking\""],
  ["13", "    },"],
  ["14", "    {"],
  ["15", "      \"system\": \"Secure Schema Layer\","],
  ["16", "      \"impact\": \"Privacy-aware donor records\""],
  ["17", "    }"],
  ["18", "  ]"],
  ["19", "}"],
];

export function ExperienceJsonScreen() {
  const { t } = useTranslation();

  return (
    <DetailFrame filename="experience.json" size="920 B">
      <CodePanel label="JSON / READ ONLY">
        <pre className="pr-24">
          {rows.map(([line, text]) => (
            <Line key={line} n={line}>
              <span className={text.includes("system") || text.includes("impact") ? "text-[var(--app-success)]" : text.includes(":") ? "text-white" : "text-[var(--app-text-secondary)]"}>{text}</span>
            </Line>
          ))}
        </pre>
      </CodePanel>
      <div className="space-y-3">
        <span className="block px-1 text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--app-text-muted)]">Infrastructure Focus Areas</span>
        <div className="rounded-lg border border-[color:var(--app-border)] bg-[#13151A] p-3">
          <h2 className="text-xs font-bold text-[var(--app-text)]">{t("portfolio.experience.role")}</h2>
          <p className="mt-1 text-[11px] leading-relaxed text-[var(--app-text-secondary)] lg:text-sm">{t("portfolio.experience.body")}</p>
        </div>
        <div className="rounded-lg border border-[color:var(--app-border)] bg-[#13151A] p-3">
          <h2 className="text-xs font-bold text-[var(--app-text)]">{t("portfolio.experience.title")}</h2>
          <p className="mt-1 text-[11px] leading-relaxed text-[var(--app-text-secondary)] lg:text-sm">{t("portfolio.experience.period")}</p>
        </div>
      </div>
    </DetailFrame>
  );
}
