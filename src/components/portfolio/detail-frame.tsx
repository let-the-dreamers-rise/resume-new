"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PortfolioShell } from "@/components/portfolio/portfolio-shell";

export function DetailFrame({
  filename,
  size,
  children,
  footer,
}: {
  filename: string;
  size: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <PortfolioShell>
      <section className="mx-auto flex min-h-svh w-full max-w-5xl flex-1 flex-col pb-20 lg:pb-0">
        <div className="flex shrink-0 items-center justify-between border-b border-[color:var(--app-border)] bg-[#13151A] px-4 py-3">
          <div className="flex items-center gap-3">
            <Link aria-label={t("portfolio.detail.back")} href="/" className="-ml-1 rounded p-1 text-[var(--app-primary)] hover:bg-[var(--app-border)]">
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </Link>
            <div className="h-4 w-px bg-[var(--app-border)]" />
            <div className="text-xs font-bold text-[var(--app-text)]">{filename}</div>
          </div>
          <span className="text-[10px] text-[var(--app-text-muted)]">{size}</span>
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="flex-1 space-y-4 overflow-y-auto p-4 text-xs lg:p-6">
          {children}
        </motion.div>
        {footer ?? (
          <div className="border-t border-[color:var(--app-border)] bg-[#0A0B0E] p-3">
            <Link href="/" className="block w-full rounded border border-[color:var(--app-border)] bg-[var(--app-border)] py-2.5 text-center text-xs font-bold text-[var(--app-text)] hover:bg-[#2A2D35]">
              {t("portfolio.detail.back")}
            </Link>
          </div>
        )}
      </section>
    </PortfolioShell>
  );
}

export function CodePanel({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="relative overflow-x-auto rounded-lg border border-[color:var(--app-border)] bg-[var(--app-surface)] p-4 leading-relaxed">
      <div className="absolute right-2 top-2 select-none text-[10px] uppercase tracking-[0.05em] text-[var(--app-text-muted)]">{label}</div>
      {children}
    </div>
  );
}

export function Line({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <span className="block whitespace-pre text-[var(--app-text-secondary)]">
      <span className="mr-4 select-none text-[var(--app-text-muted)]">{n}</span>
      {children}
    </span>
  );
}
