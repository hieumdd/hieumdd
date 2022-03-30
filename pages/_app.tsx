import { FC } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/comfortaa';
import '@fontsource/comfortaa/variable.css';

import { DefaultSeo } from 'next-seo';

import theme from '../styles/theme';

import layouts, { Layout } from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
    const Layout = layouts[pageProps.layout as keyof Layout];
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
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </>
    );
};

export default App;
