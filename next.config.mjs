/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    domains: ['alivaablog.cinuniverse.com'],
  },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amritara.cinuniverse.com',
        pathname: '/uploads/**',
      },
    ],
  }

export default nextConfig;
