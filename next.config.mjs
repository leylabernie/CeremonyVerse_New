/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/heritage-harmony-guide",
        destination: "/resources",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
