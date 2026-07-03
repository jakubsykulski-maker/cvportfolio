import type { Metadata, Viewport } from "next";
import { Sora, Literata } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

/**
 * OG title + description tuned to LinkedIn / Twitter / Slack
 * preview-card character budgets:
 *   - title:       50–60 characters (this one ≈ 52)
 *   - description: 110–160 characters (this one ≈ 154)
 * Below those, social cards look thin; above, they get truncated
 * mid-word. Counts checked manually via opengraph.xyz.
 */
const OG_TITLE = "Jakub Sykulski — Operations, Business Analysis & BI";
const OG_DESCRIPTION =
  "Operations & business analysis professional — 8+ years across BIS, Stuart (DPD) and FlixBus. Now building AI-assisted internal tools. Case studies inside.";

export const metadata: Metadata = {
  // Absolute base for OG / Twitter image URLs. Without this, Next
  // falls back to http://localhost:3000 at build time and warns.
  metadataBase: new URL(site.url),
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  // Unlisted — recruiters reach this via direct CV link, not search engines.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  authors: [{ name: site.name }],
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    type: "website",
    siteName: "jakubsykulski.com",
    // Generated manually from /public/og.html (see comments at the
    // top of that file for the screenshot workflow). Drop the resulting
    // 1200×630 PNG at /public/og.png. Until then, LinkedIn previews
    // show the grey default — fine, but not great.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: OG_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  // Matches --color-cream in globals.css. Next bakes this into the
  // <meta name="theme-color"> tag at build time, so it has to be a
  // literal hex — keep in sync if the cream token changes.
  themeColor: "#faf6ef",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${literata.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
