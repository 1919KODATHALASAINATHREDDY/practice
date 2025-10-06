import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a static export under ./out for easy PDF capture
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
