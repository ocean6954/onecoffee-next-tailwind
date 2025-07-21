/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.microcms-assets.io',
      'scontent-nrt1-1.cdninstagram.com',
      'scontent-nrt1-2.cdninstagram.com',
      'scontent-itm1-1.cdninstagram.com',
      'scontent.cdninstagram.com',
      'instagram.fhkd1-1.fna.fbcdn.net',
    ],
    // disableStaticImages: true,
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
