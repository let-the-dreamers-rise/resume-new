"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  changeLocale,
  getLocalePreference,
  normalizeLocale,
  supportedLocales,
  type LocalePreference,
} from "@/i18n";

export function TerminalLocaleControl() {
  const { t, i18n } = useTranslation();
  const [preference, setPreference] = useState<LocalePreference>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPreference(getLocalePreference());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const sync = () => setPreference(getLocalePreference());
    i18n.on("languageChanged", sync);
    window.addEventListener("app-locale-preference-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      i18n.off("languageChanged", sync);
      window.removeEventListener("app-locale-preference-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, [i18n, mounted]);

  const current = normalizeLocale(i18n.language) ?? "en-US";
  const resolvedLabel = current === "zh-CN" ? t("language.zhCN") : t("language.enUS");

  return (
    <label className="flex min-h-11 items-center gap-2 rounded-md border border-[color:var(--app-border)] bg-[var(--app-surface)] px-2.5 text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--app-text-secondary)] hover:border-[color:var(--app-primary)]/60">
      <Globe className="h-3.5 w-3.5 text-[var(--app-primary)]" aria-hidden />
      <span className="sr-only">{t("language.label")}</span>
      <select
        aria-label={t("language.label")}
        value={mounted ? preference : "system"}
        onChange={(event) => void changeLocale(event.target.value as LocalePreference)}
        className="min-h-8 cursor-pointer bg-transparent text-[10px] font-bold uppercase text-[var(--app-text)] outline-none"
        title={
          preference === "system"
            ? t("language.followSystemWithLanguage", { language: resolvedLabel })
            : resolvedLabel
        }
      >
        <option value="system">{t("language.followSystem")}</option>
        {supportedLocales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.code === "zh-CN" ? t("language.zhCN") : t("language.enUS")}
          </option>
        ))}
      </select>
    </label>
  );
}
