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
  experimental: {
    serverComponentsExternalPackages: ['framer-motion'],
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig;
