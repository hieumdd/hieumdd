import { Container } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Container
            minH={{ base: 'calc(100vh - (80px + 88px))', md: 'calc(100vh - (160px + 88px))' }}
            mt={{ base: 20, md: 40 }}
        >
            {children}
        </Container>
    );
};
