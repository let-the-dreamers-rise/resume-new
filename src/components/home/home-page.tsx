"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, FileText, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";
import { portfolioRoutes, portfolioStats } from "@/lib/portfolio-data";
import { PortfolioShell, ShellActionLink } from "@/components/portfolio/portfolio-shell";

const itemMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export function HomePage() {
  const { t } = useTranslation();

  return (
    <PortfolioShell>
      <section className="mx-auto flex min-h-svh w-full max-w-5xl flex-1 flex-col pb-20 lg:pb-0">
        <div className="flex shrink-0 items-center justify-between border-b border-[color:var(--app-border)] bg-[#13151A] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-3 w-3 rounded-full bg-[var(--app-error)] opacity-80" />
              <span className="h-3 w-3 rounded-full bg-[var(--app-warning)] opacity-80" />
              <span className="h-3 w-3 rounded-full bg-[var(--app-accent)] opacity-80" />
            </div>
            <div className="h-4 w-px bg-[var(--app-border)]" />
            <div className="flex items-center gap-2 text-xs text-[var(--app-text-secondary)]">
              <Terminal className="h-3 w-3 text-[var(--app-primary)]" aria-hidden />
              <span className="font-bold text-[var(--app-text)]">{t("portfolio.home.headerTitle")}</span>
            </div>
          </div>
          <span className="rounded bg-[var(--app-border)] px-2 py-0.5 text-[10px] font-bold tracking-[0.05em] text-[var(--app-primary)]">
            {t("portfolio.home.version")}
          </span>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4 lg:p-6">
          <motion.div {...itemMotion} className="rounded-lg border border-[color:var(--app-border)] bg-[var(--app-surface)] p-4 lg:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-lg font-bold tracking-tight text-white lg:text-3xl">{t("portfolio.hero.name")}</h1>
                <p className="mt-1 text-xs text-[var(--app-primary)] lg:text-sm">{t("portfolio.hero.title")}</p>
                <p className="mt-3 max-w-2xl text-[11px] leading-relaxed text-[var(--app-text-secondary)] lg:text-base">
                  {t("portfolio.hero.summary")}
                </p>
              </div>
              <div className="sm:text-right">
                <span className="block text-xs font-bold text-[var(--app-success)] lg:text-base">{t("portfolio.hero.gpa")}</span>
                <span className="block text-[10px] text-[var(--app-text-muted)] lg:text-xs">{t("portfolio.hero.location")}</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[color:var(--app-border)] pt-3 text-center">
              {portfolioStats.map((stat) => (
                <div key={stat.labelKey} className="rounded border border-[color:var(--app-border)] bg-[#13151A] p-2">
                  <span className="block text-[10px] font-bold text-[var(--app-text-muted)]">{t(stat.labelKey)}</span>
                  <span className="text-xs font-bold text-[var(--app-text)] lg:text-sm">{t(stat.valueKey)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...itemMotion} transition={{ delay: 0.05 }} className="flex items-center justify-between rounded-lg border border-[color:var(--app-success)]/30 bg-[#141B18] p-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--app-success)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--app-success)]" />
              </span>
              <div className="text-[11px]">
                <span className="block font-bold text-[var(--app-success)]">{t("portfolio.home.integrityTitle")}</span>
                <span className="text-[var(--app-text-secondary)]">{t("portfolio.home.integritySub")}</span>
              </div>
            </div>
            <Link href="/telemetry-log" className="rounded border border-[color:var(--app-primary)]/25 bg-[var(--app-primary)]/10 px-2 py-1 text-[10px] font-bold text-[var(--app-primary)] hover:bg-[var(--app-primary)]/20">
              {t("portfolio.home.logs")}
            </Link>
          </motion.div>

          <div>
            <span className="mb-2 block px-1 text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--app-text-muted)]">
              {t("portfolio.home.sourceFiles")}
            </span>
            <div className="grid gap-2 lg:grid-cols-2">
              {portfolioRoutes.slice(0, 5).map((route, index) => {
                const Icon = route.icon || FileText;
                return (
                  <motion.div key={route.key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + index * 0.03 }} whileHover={{ x: 3 }} whileTap={{ scale: 0.99 }}>
                    <Link href={route.path} className="flex min-h-16 w-full items-center justify-between rounded-lg border border-[color:var(--app-border)] bg-[var(--app-surface)] p-3 text-left hover:border-[color:var(--app-primary)]">
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-[var(--app-primary)]" aria-hidden />
                        <div>
                          <span className="block text-xs font-bold text-[var(--app-text)]">{t(route.labelKey)}</span>
                          <span className="text-[10px] text-[var(--app-text-secondary)]">{t(route.metaKey)}</span>
                        </div>
                      </div>
                      <ChevronRight className="h-3.5 w-3.5 text-[var(--app-text-muted)]" aria-hidden />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="shrink-0 border-t border-[color:var(--app-border)] bg-[#0A0B0E] p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--app-text-secondary)]">{t("portfolio.home.quickActions")}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <ShellActionLink actionKey="contact" />
            <ShellActionLink actionKey="hire" />
          </div>
        </div>

        <div className="hidden h-6 shrink-0 items-center justify-between border-t border-[color:var(--app-border)] bg-[#0A0B0E] px-3 text-[10px] text-[var(--app-text-muted)] lg:flex">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--app-success)]" />
            <span>{t("portfolio.home.statusReady")}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{t("portfolio.home.env")}</span>
            <span>{t("portfolio.home.encoding")}</span>
          </div>
        </div>
      </section>
    </PortfolioShell>
  );
}
