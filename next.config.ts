// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['www.satoriahotel.com', 'example.com'], // Add the domains where you're fetching images from
  },
};

export default nextConfig;
