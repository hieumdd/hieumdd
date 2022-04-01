/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GTM_ID: 'GTM-WVHZ39P',
        GTM_AUTH: 'L68Uyl2UNEGXNPWOk0KeYA',
        GTM_ENV: process.env.NODE_ENV === 'production' ? 'env-1' : 'env-2',
        REPO_URL: 'https://github.com/hieumdd',
        CV_URL: 'https://hieumdd.notion.site/Hieu-Mai-Dinh-c943b8cb36194d2cb42f2dd2af9ea517',
    },
    images: {
        dangerouslyAllowSVG: true,
    },
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
