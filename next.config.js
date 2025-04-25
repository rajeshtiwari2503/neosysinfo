/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/old-page',
          destination: '/new-page',
          permanent: true, // Set to false for temporary redirect
        },
      ]
    },
    async rewrites() {
      return [
        {
          source: '/legacy-path',
          destination: '/new-path',
        },
      ]
    },
    reactStrictMode: true, // Enable React Strict Mode for better debugging
  }
  
  module.exports = nextConfig
  