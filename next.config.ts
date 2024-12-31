import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        // port: "",
        // pathname: "/account123/**",
        // search: "",
        
      },
    ],
    dangerouslyAllowSVG: true,
  },
  // }
};

export default nextConfig;
