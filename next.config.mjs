/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static optimization where possible
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
