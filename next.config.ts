import { NextConfig } from 'next';

const config: NextConfig = {
  // output: 'export' kaldırıldı - API route'lar için gerekli
  // Vercel'de otomatik olarak serverless function olarak çalışacak
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
