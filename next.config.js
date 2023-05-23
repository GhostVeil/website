/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/website/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
