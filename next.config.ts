import type { NextConfig } from "next";

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // serve modern formats automatically
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // strip console.logs in prod
  },
};

export default nextConfig;
