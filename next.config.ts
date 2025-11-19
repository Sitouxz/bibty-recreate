import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use webpack instead of Turbopack to avoid native module issues with lightningcss
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
