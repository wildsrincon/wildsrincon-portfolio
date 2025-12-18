import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Disable React DevTools in production
  webpack: (
    config: any,
    { dev, isServer }: { dev: boolean; isServer: boolean },
  ) => {
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react-dom/client": "react-dom/client",
      };
    }
    return config;
  },
  // Empty turbopack config to silence the warning
  turbopack: {},
};

export default nextConfig;
