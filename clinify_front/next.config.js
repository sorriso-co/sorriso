// import CompressionPlugin from 'compression-webpack-plugin';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack(config, { isServer }) {
//     if (!isServer) {
//       config.plugins.push(
//         new CompressionPlugin({
//           filename: '[path][base].gz',
//           algorithm: 'gzip',
//           test: /\.(js|css|html|svg)$/,
//           threshold: 10240,
//           minRatio: 0.8,
//         })
//       );
//     }

//     return config;
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // Other Next.js config options can go here
  reactStrictMode: true,  // Example config option
  // Add more options as needed
});
