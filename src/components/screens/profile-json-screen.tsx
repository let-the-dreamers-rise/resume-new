"use client";

import { useTranslation } from "react-i18next";
import { CodePanel, DetailFrame, Line } from "@/components/portfolio/detail-frame";

const jsonRows = [
  ["01", "{"],
  ["02", "  \"engineer\": {"],
  ["03", "    \"name\": \"Ashwin Goyal\","],
  ["04", "    \"location\": \"Navi Mumbai, India\","],
  ["05", "    \"education\": \"VIT Bhopal University (B.Tech CSE)\","],
  ["06", "    \"timeline\": \"2024 - 2028\","],
  ["07", "    \"gpa\": \"8.94 / 10.0\","],
  ["08", "    \"target\": \"Microsoft SWE Intern\""],
  ["09", "  },"],
  ["10", "  \"metrics\": {"],
  ["11", "    \"shipped_systems\": \"60+\","],
  ["12", "    \"hackathons\": \"45+ International\","],
  ["13", "    \"experience\": \"1+ Years\""],
  ["14", "  },"],
  ["15", "  \"core_competencies\": ["],
  ["16", "    \"DSA & Graph BFS/DFS\","],
  ["17", "    \"OOP & System Design\","],
  ["18", "    \"API Testing & CI/CD\","],
  ["19", "    \"Privacy-Aware Architecture\""],
  ["20", "  ]"],
  ["21", "}"],
];

export function ProfileJsonScreen() {
  const { t } = useTranslation();

  return (
    <DetailFrame filename="profile.json" size="1.18 KB">
      <CodePanel label="JSON / READ ONLY">
        <pre className="pr-24">
          {jsonRows.map(([line, text]) => {
            const isKey = text.includes("\"") && text.includes(":");
            const isArrayValue = text.includes("DSA") || text.includes("OOP") || text.includes("API") || text.includes("Privacy");
            return (
              <Line key={line} n={line}>
                <span className={isArrayValue ? "text-[var(--app-success)]" : isKey ? "text-white" : "text-[var(--app-text-secondary)]"}>{text}</span>
              </Line>
            );
          })}
        </pre>
      </CodePanel>
      <div className="space-y-3 rounded-lg border border-[color:var(--app-border)] bg-[#13151A] p-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.05em] text-white">Differentiator</h2>
        <p className="text-xs leading-relaxed text-[var(--app-text-secondary)] lg:text-sm">
          {t("portfolio.profile.summary")}
        </p>
      </div>
    </DetailFrame>
  );
}
