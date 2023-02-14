/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
  domains: ["github.com", "lh3.googleusercontent.com", "i.ytimg.com", "youtu.be", "ca.slack-edge.com"],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });
    return config;
  },
};

const withImages = require('next-images')
module.exports = withImages();

module.exports = nextConfig;