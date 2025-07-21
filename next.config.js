/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-nrt1-1.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-nrt1-2.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-itm1-1.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'instagram.fhkd1-1.fna.fbcdn.net',
        pathname: '/**',
      },
    ],
    // disableStaticImages: true, // 必要に応じて
  },
  output: 'export',
  env: {
    NEXT_PUBLIC_SERVICE_DOMAIN: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_ACCESS_TOKEN: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    NEXT_PUBLIC_NEXT_PUBLIC_INSTAGRAM_BUSINESS_ID:
      process.env.NEXT_PUBLIC_INSTAGRAM_BUSINESS_ID,
    NEXT_PUBLIC_INSTAGRAM_ACCOUNT_NAME:
      process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT_NAME,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
  // experimental: {
  //   optimizeFonts: true,
  // },
}

module.exports = nextConfig

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     })
//     return config
//   },
// }

compiler: {
  emotion: true
}
