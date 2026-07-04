"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PortfolioShell } from "@/components/portfolio/portfolio-shell";

export function HireModalScreen() {
  const { t } = useTranslation();

  return (
    <PortfolioShell>
      <div className="flex min-h-svh items-end justify-center bg-black/35 p-0 lg:items-center lg:p-6">
        <section className="max-h-[85svh] w-full max-w-xl space-y-4 overflow-y-auto rounded-t-xl border-t border-[color:var(--app-border)] bg-[var(--app-surface)] p-4 lg:rounded-xl lg:border">
          <div className="flex items-center justify-between border-b border-[color:var(--app-border)] pb-3">
            <div>
              <h1 className="text-xs font-bold uppercase tracking-[0.05em] text-white">sudo hire ashwin</h1>
              <p className="mt-0.5 text-[10px] text-[var(--app-text-secondary)]">Specialized instruction payload</p>
            </div>
            <Link aria-label={t("common.close")} href="/" className="rounded p-1 text-[var(--app-text-secondary)] hover:bg-[var(--app-border)] hover:text-white">
              <X className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="space-y-3 rounded border border-[color:var(--app-primary)]/40 bg-[var(--app-border)] p-3.5 text-xs leading-relaxed text-white">
            <span className="block w-max rounded bg-[var(--app-primary)] px-1.5 py-0.5 text-[10px] font-bold uppercase text-black">RECOMMENDED</span>
            <p>
              Ashwin Goyal: B.Tech Computer Science student at VIT Bhopal with 8.94 CGPA, strong OOP architecture background, high design taste, and proven testing habits. A strong match for high-demand, high-scale internship programs.
            </p>
          </div>
          <div className="space-y-2">
            <a className="block w-full rounded bg-[var(--app-primary)] py-2.5 text-center text-xs font-bold text-black hover:bg-[var(--app-primary)]/90" href="mailto:letthedreamersrise@gmail.com">
              Send Direct Email Offer
            </a>
            <Link href="/" className="block w-full rounded border border-[color:var(--app-border)] bg-[#13151A] py-2.5 text-center text-xs text-[var(--app-text-secondary)] hover:bg-[var(--app-border)]">
              Keep Reviewing Files
            </Link>
          </div>
        </section>
      </div>
    </PortfolioShell>
  );
}
