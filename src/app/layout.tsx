import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/utils/utils";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/components/i18n/i18n-provider";
import { getServerLocale } from "@/lib/i18n/server-preference";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const heading = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const SITE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

const SITE_TITLE = process.env.NEXT_PUBLIC_APP_TITLE?.trim() || "Ashwin Goyal Portfolio";
const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION?.trim() ||
  "Terminal minimalist portfolio for Ashwin Goyal.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  ...(SITE_URL
    ? {
        metadataBase: new URL(SITE_URL),
        openGraph: {
          title: SITE_TITLE,
          description: SITE_DESCRIPTION,
          url: SITE_URL,
          siteName: SITE_TITLE,
          type: "website",
        },
        twitter: {
          card: "summary_large_image",
          title: SITE_TITLE,
          description: SITE_DESCRIPTION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getServerLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn("h-full antialiased", mono.variable, heading.variable)}
    >
      <body className="min-h-svh">
        <I18nProvider>
          {children}
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  );
}
