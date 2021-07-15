import React, { useState, useRef } from 'react';
import {
  useDisclosure,
  useOutsideClick,
  Box,
  Flex,
  Container,
} from '@chakra-ui/react';

import Logo from './Logo';
import { DesktopNavLinks, MobileNavLinks, MobileMenuIcon } from './NavLinks';

const Header = () => {
  const ref = useRef();
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [isScrolled, setScrolled] = useState(false);

  useOutsideClick({
    ref,
    handler: () => onClose(),
  });

  const handleScrolled = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setScrolled(true);
    } else if (scrolled === 0) {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScrolled);

  return (
    <Flex
      pos="fixed"
      borderRadius={0}
      width="100%"
      zIndex={999}
      bgColor="white"
      ref={ref}
      className={isScrolled ? 'shadow' : ''}
    >
      <Container>
        <Flex direction="column">
          <Flex py={4} borderRadius={0} justify="space-between">
            <Box boxSize={8} display={{ base: 'block', md: 'none' }} />
            <Logo />
            <DesktopNavLinks />
            <MobileMenuIcon isOpen={isOpen} onToggle={onToggle} />
          </Flex>
          <MobileNavLinks isOpen={isOpen} onToggle={onToggle} />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
