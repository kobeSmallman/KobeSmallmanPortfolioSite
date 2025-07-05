/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'localhost',
      'kobe.dev'
    ],
  },
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig;
