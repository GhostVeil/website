/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
  assetPrefix: isProd ? "/website" : undefined,
  output: "export",
};

module.exports = nextConfig;
