// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // ✅ Add this line
  },

    typescript: {

    ignoreBuildErrors: true,
  },

    eslint: {

    ignoreDuringBuilds: true,
  }
};



module.exports = nextConfig;
