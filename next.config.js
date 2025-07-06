/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean Next.js 14 configuration for Vercel
  images: {
    unoptimized: true,
  },
  // Let Next.js handle everything with defaults
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimize for Vercel deployment
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Remove static export settings for Vercel
  trailingSlash: false,
}

module.exports = nextConfig;
