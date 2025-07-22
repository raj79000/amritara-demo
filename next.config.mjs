/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    domains: ['amritara.cinuniverse.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amritara.cinuniverse.com',
        pathname: '/admin/**',
      },
    ],
  }
}

export default nextConfig;
