/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["cdn.pixabay.com", "i.ibb.co"],
  },
  env: {
    IMGBB_API_KEY: process.env.IMGBB_API_KEY,
  },
};

module.exports = nextConfig;
