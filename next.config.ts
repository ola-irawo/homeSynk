import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors
  },
  webpack: (config) => {
    config.ignoreWarnings = [/webpack error/i]; // Ignore Webpack warnings (not recommended for production)
    return config;
  },
};

export default nextConfig;
