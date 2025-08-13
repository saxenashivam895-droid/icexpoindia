/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ["blob.v0.dev", "sjc.microlink.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blob.v0.dev",
      },
      {
        protocol: "https",
        hostname: "sjc.microlink.io",
      },
    ],
    // Enable optimization in production
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  
  // Build optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Only ignore during development
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV !== 'production',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV !== 'production',
  },
}

module.exports = nextConfig
