import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
};

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)', // Aplica a todas as rotas
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
