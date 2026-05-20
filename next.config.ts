import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Portfolio is unlisted: no indexing, no public discovery.
  // robots.ts + per-page <meta name="robots"> reinforce this.
  poweredByHeader: false,
};

export default nextConfig;
