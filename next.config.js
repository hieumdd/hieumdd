/** @type {import('next').NextConfig} */
const nextConfig = (env) => ({
    reactStrictMode: true,
    output: 'export',
    assetPrefix: env.BASE_PATH,
    basePath: env.BASE_PATH,
    images: {
        unoptimized: true,
    },
});

module.exports = nextConfig;
