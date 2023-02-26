/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/, // *.svg?url
    })
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      use: ['@svgr/webpack'],
    })
    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bafybeihdnlthtucktivmrd3y2dds6owzotn2gs4xsuuyo6lfz5x7xrktci.ipfs'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'developer.laros.ch',
      },
    ],
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
    localeDetection: false,
  },
}

module.exports = nextConfig
