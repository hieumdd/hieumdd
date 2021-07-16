import React from 'react';
import { Container, VStack, Divider } from '@chakra-ui/layout';

import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import ScrollToTop from './ScrollToTop';

const Layout = ({ title, children }) => (
  <>
    <SEO title={title} />
    <Header />
    <Container
      as={VStack}
      py="10vh"
      alignItems={{ base: 'center', md: 'flex-start' }}
      spacing="4rem"
      divider={<Divider />}
    >
      {children}
    </Container>
    <ScrollToTop />
    <Footer />
  </>
);

export default Layout;
