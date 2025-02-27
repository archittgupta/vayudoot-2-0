import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com'], // Added Unsplash images support
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
