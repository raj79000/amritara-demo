/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amritara.cinuniverse.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
