import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',  // <=== Enables static export
  
  // Optional: Add this if you get Image Optimization errors
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
