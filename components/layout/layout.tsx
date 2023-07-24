import { Container } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
    return <Container mt={20}>{children}</Container>;
};
