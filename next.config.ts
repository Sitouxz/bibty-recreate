import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack for production builds to avoid Lightning CSS native module issues
  experimental: {
    turbo: undefined,
  },
};

export default nextConfig;
