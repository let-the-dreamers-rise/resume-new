"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PortfolioShell } from "@/components/portfolio/portfolio-shell";

export function ContactModalScreen() {
  const { t } = useTranslation();

  return (
    <PortfolioShell>
      <div className="flex min-h-svh items-end justify-center bg-black/35 p-0 lg:items-center lg:p-6">
        <section className="max-h-[85svh] w-full max-w-xl space-y-4 overflow-y-auto rounded-t-xl border-t border-[color:var(--app-border)] bg-[var(--app-surface)] p-4 lg:rounded-xl lg:border">
          <div className="flex items-center justify-between border-b border-[color:var(--app-border)] pb-3">
            <div>
              <h1 className="text-xs font-bold uppercase tracking-[0.05em] text-white">cat contact.json</h1>
              <p className="mt-0.5 text-[10px] text-[var(--app-text-secondary)]">Telemetry contact endpoints</p>
            </div>
            <Link aria-label={t("common.close")} href="/" className="rounded p-1 text-[var(--app-text-secondary)] hover:bg-[var(--app-border)] hover:text-white">
              <X className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="space-y-2.5">
            <a className="block rounded-lg border border-[color:var(--app-border)] bg-[#13151A] p-3 hover:border-[color:var(--app-primary)]" href="mailto:letthedreamersrise@gmail.com">
              <span className="block text-[10px] text-[var(--app-text-muted)]">EMAIL ENDPOINT</span>
              <span className="mt-0.5 block text-xs font-bold text-[var(--app-primary)]">{t("portfolio.contact.email")}</span>
              <span className="mt-1 block text-[9px] text-[var(--app-text-secondary)]">Click to launch default mailing client</span>
            </a>
            <a className="block rounded-lg border border-[color:var(--app-border)] bg-[#13151A] p-3 hover:border-[color:var(--app-primary)]" href="tel:+918097251640">
              <span className="block text-[10px] text-[var(--app-text-muted)]">PHONE ENDPOINT</span>
              <span className="mt-0.5 block text-xs font-bold text-[var(--app-primary)]">{t("portfolio.contact.phone")}</span>
              <span className="mt-1 block text-[9px] text-[var(--app-text-secondary)]">Click to dial via device telecommunications</span>
            </a>
            <div className="rounded-lg border border-[color:var(--app-border)] bg-[#13151A] p-3">
              <span className="block text-[10px] text-[var(--app-text-muted)]">GEOGRAPHY NODE</span>
              <span className="mt-0.5 block text-xs font-bold text-white">{t("portfolio.contact.location")}</span>
            </div>
          </div>
          <Link href="/" className="block w-full rounded border border-[color:var(--app-border)] bg-[var(--app-border)] py-2.5 text-center text-xs font-bold text-[var(--app-text)] hover:bg-[#2A2D35]">
            Close Buffer Connection
          </Link>
        </section>
      </div>
    </PortfolioShell>
  );
}
