// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export', 
//     trailingSlash: true, 
//     images: { unoptimized: true } ,
//     compiler: {
//         styledComponents: true,
//       },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // only apply to JS/TS files
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;

