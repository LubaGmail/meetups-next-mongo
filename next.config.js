/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      // env: {
      //   mongo_username: 'm220student',
      //   mongo_pass: 'perchik',
      //   mongo_cluster: 'cluster0',
      // },
      reactStrictMode: true,
    }
  }

  return {
    env: {
      // mongo_username: 'm220student',
      // mongo_pass: 'perchik',
      // mongo_cluster: 'cluster0',
    },
    swcMinify: true,
  }
}

