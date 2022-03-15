import { AppProps } from 'next/app';
import { ChakraProvider, Container, VStack, Divider } from '@chakra-ui/react';

import theme from '../styles/theme';

import Header from '../components/Header';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <ChakraProvider theme={theme}>
            <Header />
            <Container maxW="container.md" pt="10vh">
                <VStack
                    alignItems={{ base: 'center', md: 'flex-start' }}
                    gap="4em"
                    divider={<Divider />}
                >
                    <Component {...pageProps} />
                </VStack>
            </Container>
        </ChakraProvider>
    </>
);

export default App;
