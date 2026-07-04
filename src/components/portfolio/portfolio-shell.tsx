"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";
import { portfolioRoutes, shellActions } from "@/lib/portfolio-data";
import { reportPortfolioAction } from "@/lib/portfolio-memory";
import { TerminalLocaleControl } from "@/components/portfolio/terminal-locale-control";

const navItem = {
  rest: { x: 0 },
  hover: { x: 4, transition: { duration: 0.15 } },
  tap: { scale: 0.98 },
};

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <div className="min-h-svh bg-[var(--app-bg)] text-[var(--app-text)] terminal-grid">
      <div className="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden border-r border-[color:var(--app-border)] bg-[#0A0B0E]/95 p-4 lg:flex lg:flex-col">
          <Link href="/" className="mb-6 flex items-center gap-2 rounded-md border border-[color:var(--app-border)] bg-[var(--app-surface)] p-3">
            <Terminal className="h-4 w-4 text-[var(--app-primary)]" aria-hidden />
            <div>
              <p className="text-xs font-bold text-[var(--app-text)]">{t("portfolio.shell.appTitle")}</p>
              <p className="text-[10px] uppercase tracking-[0.05em] text-[var(--app-text-muted)]">{t("portfolio.shell.mode")}</p>
            </div>
          </Link>
          <nav className="space-y-2" aria-label={t("portfolio.shell.navLabel")}>
            {portfolioRoutes.map((route) => {
              const Icon = route.icon;
              const active = pathname === route.path;
              return (
                <motion.div key={route.key} variants={navItem} initial="rest" whileHover="hover" whileTap="tap">
                  <Link
                    href={route.path}
                    onClick={() => reportPortfolioAction(`User opened portfolio file: ${route.key}`, "open_portfolio_file", route.key)}
                    className={`flex min-h-11 items-center justify-between rounded-md border px-3 py-2 text-left ${
                      active
                        ? "border-[color:var(--app-primary)] bg-[var(--app-primary)]/10 text-[var(--app-primary)]"
                        : "border-[color:var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text-secondary)] hover:border-[color:var(--app-primary)]/50 hover:text-[var(--app-text)]"
                    }`}
                  >
                    <span className="flex items-center gap-2 text-xs font-bold">
                      <Icon className="h-4 w-4" aria-hidden />
                      {t(route.labelKey)}
                    </span>
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </motion.div>
              );
            })}
          </nav>
          <div className="mt-auto space-y-3 pt-6">
            <TerminalLocaleControl />
            <p className="text-[10px] leading-relaxed text-[var(--app-text-muted)]">{t("portfolio.shell.sidebarNote")}</p>
          </div>
        </aside>

        <main className="relative flex min-h-svh flex-col overflow-hidden scanline">
          <div className="flex items-center justify-between border-b border-[color:var(--app-border)] bg-[#13151A] px-4 py-3 lg:hidden">
            <Link href="/" className="flex items-center gap-2 text-xs font-bold text-[var(--app-text)]">
              <Terminal className="h-4 w-4 text-[var(--app-primary)]" aria-hidden />
              {t("portfolio.shell.appTitle")}
            </Link>
            <TerminalLocaleControl />
          </div>
          {children}
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-[color:var(--app-border)] bg-[#0A0B0E] px-2 pb-[env(safe-area-inset-bottom)] lg:hidden" aria-label={t("portfolio.shell.mobileNavLabel")}>
        <div className="grid h-16 grid-cols-4 gap-1">
          {[portfolioRoutes[0], portfolioRoutes[1], portfolioRoutes[3], portfolioRoutes[5]].map((route) => {
            const Icon = route.icon;
            const active = pathname === route.path;
            return (
              <Link
                key={route.key}
                href={route.path}
                onClick={() => reportPortfolioAction(`User opened mobile portfolio tab: ${route.key}`, "open_mobile_portfolio_tab", route.key)}
                className="flex min-h-11 flex-col items-center justify-center gap-1 text-[10px] font-bold"
              >
                <Icon className={`h-4 w-4 ${active ? "text-[var(--app-primary)]" : "text-[var(--app-text-secondary)]"}`} aria-hidden />
                <span className={active ? "text-[var(--app-primary)]" : "text-[var(--app-text-secondary)]"}>{t(route.labelKey)}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export function ShellActionLink({ actionKey }: { actionKey: "contact" | "hire" }) {
  const { t } = useTranslation();
  const action = shellActions.find((item) => item.key === actionKey);
  if (!action) return null;
  const Icon = action.icon;
  const classes =
    action.variant === "primary"
      ? "bg-[var(--app-primary)] text-black hover:bg-[var(--app-primary)]/90"
      : "border border-[color:var(--app-border)] bg-[var(--app-border)] text-[var(--app-primary)] hover:border-[color:var(--app-primary)]/50";

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={action.path}
        onClick={() => reportPortfolioAction(`User opened recruiter action: ${action.key}`, "open_recruiter_action", action.key)}
        className={`flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-bold ${classes}`}
      >
        <Icon className="h-3.5 w-3.5" aria-hidden />
        {t(action.labelKey)}
      </Link>
    </motion.div>
  );
}
