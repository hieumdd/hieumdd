import { FC } from 'react';
import { ContainerProps, Container } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

export type PageProps = {
    layout: string;
    title: string;
};

export type Layout = {
    [key: string]: FC;
};

const Shell: FC<ContainerProps> = ({ children, ...rest }) => (
    <>
        <Header />
        <Container alignItems="stretch" pb="5vh" {...rest}>
            {children}
        </Container>
        <Footer />
    </>
);

const HomeLayout: FC = ({ children }) => <Shell pt="10vh">{children}</Shell>;

const ArticlesLayout: FC = ({ children }) => (
    <Shell pt="15vh">{children}</Shell>
);

const ArticleLayout: FC = ({ children }) => (
    <Shell maxW="container.md" pt="15vh">
        {children}
    </Shell>
);

const layouts: Layout = {
    home: HomeLayout,
    articles: ArticlesLayout,
    article: ArticleLayout,
};

export default layouts;
