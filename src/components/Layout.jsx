import React from 'react';
import { Box, Container, VStack } from '@chakra-ui/layout';

import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import ScrollToTop from './ScrollToTop';

const Layout = ({ title, children }) => (
  <Box>
    <Header />
    <Container py="10vh">
      <VStack
        spacing={20}
        py={10}
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <SEO title={title} />
        {children}
      </VStack>
    </Container>
    <ScrollToTop />
    <Footer />
  </Box>
);

export default Layout;
