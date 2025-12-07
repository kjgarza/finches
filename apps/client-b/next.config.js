/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui', '@repo/ai-elements', '@repo/utils'],
  outputFileTracingRoot: require('path').join(__dirname, '../../'),
};

module.exports = nextConfig;
