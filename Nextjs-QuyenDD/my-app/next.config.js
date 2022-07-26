/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.w2project.asia'],
  },
  formats: ['image/avif', 'image,webp'],
};

module.exports = nextConfig;
