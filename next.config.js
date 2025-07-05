/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'localhost',
      'kobe.dev'
    ],
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig;
