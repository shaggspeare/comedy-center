const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  // output: "export",
};

module.exports = nextConfig;
