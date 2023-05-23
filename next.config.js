/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: isProd ? "/website" : "./",
  output: "export",
};

module.exports = nextConfig;
