import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

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
                        href: 'icons/profile_nord.svg',
                    },
                ]}
            />
            <ChakraProvider theme={theme}>
                {/* <Header /> */}
                <Component {...pageProps} />
                <Footer />
            </ChakraProvider>
        </>
    );
};

export default App;
