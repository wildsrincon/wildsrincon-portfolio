import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Allow loading images from the Sanity CDN used in this project
    domains: ["cdn.sanity.io"],
    // remotePatterns provides more flexible matching for Next versions that support it
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
