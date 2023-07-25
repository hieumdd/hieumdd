import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';
import TagManager from 'react-gtm-module';

import { useDefaultSEO } from '../hooks/use-seo';
import { theme } from '../styles/theme';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';
import { Layout } from '../components/layout/layout';
import '../styles/prism-one-light.css';

export type PageProps = {
    title: string;
};

const App = ({ Component, pageProps }: AppProps<PageProps>) => {
    useEffect(() => {
        TagManager.initialize({
            gtmId: 'GTM-WVHZ39P',
            auth: 'gkLJjnTuiGjzjTIUJQDSag',
            preview: process.env.NEXT_PUBLIC_GTM_PREVIEW,
        });
    }, []);

    return (
        <>
            <DefaultSeo {...useDefaultSEO(pageProps.title)} />
            <ChakraProvider theme={theme}>
                <Header />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <Footer />
            </ChakraProvider>
        </>
    );
};

export default App;
