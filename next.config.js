/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'serverless',
    env: {
        REPO_URL: 'https://github.com/hieumdd/hieumdd',
        CV_URL: 'https://hieumdd.notion.site/Hieu-Mai-Dinh-c943b8cb36194d2cb42f2dd2af9ea517',
    },
    images: {
        dangerouslyAllowSVG: true,
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
