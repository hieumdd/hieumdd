import { DefaultSeoProps } from 'next-seo';

export const useDefaultSEO = (title: string): DefaultSeoProps => ({
    title,
    titleTemplate: '%s | HM',
    description: 'HM Portfolio',
    additionalLinkTags: [{ rel: 'icon', href: 'icon/profile-nord.svg' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://hieumdd.github.io/hieumdd',
        siteName: 'HM',
        images: [
            {
                url: 'https://hieumdd.github.io/hieumdd/image/og-background.png',
                width: 1200,
                height: 630,
                alt: 'Background',
            },
        ],
    },
    twitter: {
        handle: '@hieumdd',
        site: '@hieumdd',
        cardType: 'summary_large_image',
    },
});
