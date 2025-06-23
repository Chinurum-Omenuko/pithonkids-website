import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config";

const nextConfig: NextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,  // ⬅ disables type checking during build
  },
  eslint: {
    ignoreDuringBuilds: true, // ⬅ disables ESLint errors/warnings from blocking builds
  },
};

export default nextConfig;