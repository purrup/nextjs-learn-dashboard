/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["process.ENV.HOST", "localhost:3000"]
    }
  }
}

module.exports = nextConfig