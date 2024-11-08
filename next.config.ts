import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your existing config options here
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing-page',
        permanent: true, // You can set this to true if it's a permanent redirect (301) or false for temporary (302)
      },
    ];
  },
};

export default nextConfig;
