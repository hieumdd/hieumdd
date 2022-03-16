import { AppProps } from 'next/app';
import { ChakraProvider, Container, VStack } from '@chakra-ui/react';

import theme from '../styles/theme';

import Header from '../components/Header';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <ChakraProvider theme={theme}>
            <Header />
            <Container pt="10vh" pb="5vh">
                <VStack alignItems="stretch" spacing="4em">
                    <Component {...pageProps} />
                </VStack>
            </Container>
            <Footer />
        </ChakraProvider>
    </>
);

export default App;
