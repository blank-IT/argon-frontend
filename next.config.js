/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/graphql/:path*',
        destination: `http://43.201.72.82:3000/graphql/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
