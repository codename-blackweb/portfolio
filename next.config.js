/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow external domains for project screenshots if needed.
    domains: [
      'overture-os.netlify.app',
      'sp-content-system.netlify.app',
      'thesignalforge.app'
    ],
  },
};

module.exports = nextConfig;