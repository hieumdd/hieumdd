import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/comfortaa';
import '@fontsource/comfortaa/variable.css';

import { DefaultSeo } from 'next-seo';
import TagManager from 'react-gtm-module';

import theme from '../styles/theme';

import layouts, { Layout } from '@/components/Layout';
import Transition from '@/components/Layout/Transition';

const App = ({ Component, pageProps, router }: AppProps) => {
    const Layout = layouts[pageProps.layout as keyof Layout] || layouts.home;

    useEffect(
        () =>
            TagManager.initialize({
                gtmId: process.env.GTM_ID || '',
                auth: process.env.GTM_AUTH || '',
                preview: process.env.GTM_ENV || '',
            }),
        [],
    );

    return (
        <>
            <DefaultSeo
                title={pageProps.title}
                titleTemplate="%s | HM"
                description="Portfolio"
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: 'icons/profile_nord.svg',
                    },
                ]}
            />
            <ChakraProvider theme={theme}>
                <Layout>
                    <Transition route={router.route}>
                        <Component {...pageProps} />
                    </Transition>
                </Layout>
            </ChakraProvider>
        </>
    );
};

export default App;
