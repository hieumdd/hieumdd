/** @type {import('next').NextConfig} */
const nextConfig = (env) => ({
    reactStrictMode: true,
    output: 'export',
    basePath: env.BASE_PATH,
    images: {
        unoptimized: true,
    },
});

module.exports = nextConfig;
