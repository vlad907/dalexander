import type { NextConfig } from "next";

/**
 * Static export configuration.
 *
 * The entire site is client-rendered and shipped as static HTML/JS/CSS so it
 * can be hosted on any static host (S3/CloudFront, Netlify, Nginx, GitHub
 * Pages, etc.). Because there is no Next.js image optimization server in a
 * static deployment, `images.unoptimized` must be true.
 */
// Base path for project-page deploys (e.g. GitHub Pages at /<repo>). Empty for
// local dev and root/custom-domain deploys. CI sets NEXT_PUBLIC_BASE_PATH.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Emit `/about/index.html` style paths so clean URLs work on plain file hosts.
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
