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

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.summary,
  // Unlisted — recruiters reach this via direct CV link, not search engines.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  authors: [{ name: site.name }],
  openGraph: {
    title: site.name,
    description: site.title,
    type: "website",
    // Generated manually from /public/og.html (see comments at the
    // top of that file for the screenshot workflow). Drop the resulting
    // 1200×630 PNG at /public/og.png. Until then, LinkedIn previews
    // show the grey default — fine, but not great.
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
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
    <html lang="en" className={`${sora.variable} ${literata.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
