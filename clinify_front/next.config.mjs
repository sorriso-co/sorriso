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
import CompressionPlugin from 'compression-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
        })
      );
    }

    return config;
  },

  // Trailing slash handling and redirection
  trailingSlash: false, // Ensures URLs don't have trailing slashes

  async redirects() {
    return [
      {
        source: '/:path*/', // Match any URL with a trailing slash
        has: [
          {
            type: 'query',
            key: '_', // This prevents the redirect from matching the destination
            value: 'true',
          },
        ],
        destination: '/:path*', // Redirect to the version without a trailing slash
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
