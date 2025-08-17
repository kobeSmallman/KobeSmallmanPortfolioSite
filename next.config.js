const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

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
  trailingSlash: false,
  // Force serverless mode for Vercel
  target: undefined, // Remove any legacy target settings
  
  // Fix Jest worker issues in development
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
}

module.exports = withBundleAnalyzer(nextConfig);
