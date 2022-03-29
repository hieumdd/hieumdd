import { FC } from 'react';
import { Container } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

const Layout: FC = ({ children }) => {
    return (
        <>
            <Header />
            <Container pt="10vh" pb="5vh" alignItems="stretch">
                {children}
            </Container>
            <Footer />
        </>
    );
};

export default Layout;
