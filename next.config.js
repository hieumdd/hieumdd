/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CV_URL: 'https://hieumdd.notion.site/Hieu-Mai-Dinh-c943b8cb36194d2cb42f2dd2af9ea517',
    },
    images: {
        dangerouslyAllowSVG: true,
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
