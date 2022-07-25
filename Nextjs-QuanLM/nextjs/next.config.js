/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'api.w2project-internal.asia',
      'sg-stg-storage.ap-south-1.linodeobjects.com',
      'api.w2project.asia',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.NEXT_PUBLIC_BASE_API, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
};

module.exports = nextConfig;
