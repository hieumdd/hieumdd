import { FC } from 'react';
import { Container } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

export type PageProps = {
    layout: string;
    title: string;
}

export type Layout = {
    [key: string]: FC;
}

const HomeLayout: FC = ({ children }) => {
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

const ArticlesLayout: FC = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxW="container.md" pt="10vh" pb="5vh" alignItems="stretch">
                {children}
            </Container>
            <Footer />
        </>
    );
};

const layouts: Layout = {
    home: HomeLayout,
    articles: ArticlesLayout,
};

export default layouts;
