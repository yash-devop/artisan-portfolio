import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: "pbs.twimg.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
