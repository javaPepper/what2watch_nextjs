/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '11.react.pages.academy',
        port: '',
        pathname: '/static/**',
      },
    ],
  }}

module.exports = nextConfig
