import { Container } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Container
            minH={{ base: 'calc(100vh - (112px + 128px))', md: 'calc(100vh - (160px + 128px))' }}
            mt={{ base: 28, md: 40 }}
        >
            {children}
        </Container>
    );
};
