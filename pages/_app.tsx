import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { DefaultSeo } from 'next-seo';

import theme from '../styles/theme';

import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => (
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

export default App;
