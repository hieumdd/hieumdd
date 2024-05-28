/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    assetPrefix: process.env.BASE_PATH,
    basePath: process.env.BASE_PATH,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
