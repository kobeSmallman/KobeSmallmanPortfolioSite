/** @type {import('next').NextConfig} */
// Fixed Vercel deployment issues by removing static export config
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'localhost',
      'kobe.dev'
    ],
  },
  // Disable static optimization to prevent SSR issues
  experimental: {
    isrMemoryCacheSize: 0,
  },
  // Force all pages to be server-side rendered
  staticPageGenerationTimeout: 0,
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig;
