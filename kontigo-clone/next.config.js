/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['web-assets.same.dev'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web-assets.same.dev',
        pathname: '**',
      },
    ],
    unoptimized: false,
  },
  // Ensure React doesn't warn during hydration
  reactStrictMode: false,
}

module.exports = nextConfig
