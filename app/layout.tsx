import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ProgressBar } from "@/components/navigation/progress-bar";
import { SiteHeader } from "@/components/navigation/site-header";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  axes: ["opsz"],
  fallback: ["Avenir Next", "Segoe UI", "sans-serif"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex",
  fallback: ["ui-monospace", "monospace"],
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: "#0c0c0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.documentTitle,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Kirti Yadav",
    "Full-Stack AI Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "LLM",
    "RAG",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: site.documentTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.documentTitle,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#work">
          Skip to work
        </a>
        <ProgressBar />
        <CustomCursor />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
