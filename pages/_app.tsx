import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';
import { Layout } from '../components/layout/layout';
import '../styles/prism-one-light.css';

export type PageProps = {
    title: string;
};

const App = ({ Component, pageProps }: AppProps<PageProps>) => {
    return (
        <>
            <DefaultSeo
                title={pageProps.title}
                titleTemplate="%s | HM"
                description="Portfolio"
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: 'icons/profile-nord.svg',
                    },
                ]}
            />
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
