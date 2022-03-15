import { AppProps } from 'next/app';
import { ChakraProvider, Container, VStack, Divider } from '@chakra-ui/react';

import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <ChakraProvider theme={theme}>
            <Container maxW="container.md">
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
