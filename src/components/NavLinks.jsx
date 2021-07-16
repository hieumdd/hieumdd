import React from 'react';
import { Link as GLink } from 'gatsby';
import {
  Box,
  Collapse,
  StackDivider,
  IconButton,
  Flex,
  VStack,
  HStack,
  Button,
  Text,
  Link,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaPhone } from 'react-icons/fa';

const navLinksData = [
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Blog',
    to: '/blog',
  },
  {
    text: 'Contacts',
    to: '/contacts',
  },
];

const DesktopLink = ({ text, to }) => (
  <Link as={GLink} to={to} aria-label={text}>
    <Text>{text}</Text>
  </Link>
);

const DesktopButton = ({ text, to }) => (
  <Link as={GLink} to={to}>
    <Button colorScheme="blue" rightIcon={<FaPhone />} aria-label={text}>
      {text}
    </Button>
  </Link>
);

export const DesktopNavLinks = () => {
  const navLinks = navLinksData.map((navLink, i) => {
    if (navLinksData.length === i + 1) {
      return (
        <DesktopButton key={navLink.text} text={navLink.text} to={navLink.to} />
      );
    }
    return (
      <DesktopLink key={navLink.text} text={navLink.text} to={navLink.to} />
    );
  });

  return (
    <HStack display={{ base: 'none', md: 'flex' }} spacing={10}>
      {navLinks}
    </HStack>
  );
};

const MobileNavLink = ({ text, to }) => (
  <Flex as={GLink} to={to} p={2} justify="center" bgColor="white" aria-label={text}>
    {text}
  </Flex>
);

const MobileNavLinkSpecial = ({ text, to }) => (
  <Button as={GLink} to={to} p={2} justify="center" colorScheme="blue" aria-label={text}>
    <Text textColor="white">{text}</Text>
  </Button>
);

export const MobileMenuIcon = ({ isOpen, onToggle }) => (
  <IconButton
    display={{ base: 'block', md: 'none' }}
    size="lg"
    onClick={onToggle}
    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
    variant="ghost"
    aria-label="menu"
  />
);

export const MobileNavLinks = ({ isOpen }) => (
  <Box
    bgColor="white"
    pb={isOpen ? 4 : 'auto'}
    display={{ base: 'block', md: 'none' }}
  >
    <Collapse in={isOpen} animateOpacity>
      <VStack
        align="flex-end"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        divider={<StackDivider />}
      >
        {navLinksData.map((navLink, i) => {
          if (navLinksData.length === i + 1) {
            return (
              <MobileNavLinkSpecial
                key={navLink.text}
                text={navLink.text}
                to={navLink.to}
              />
            );
          }
          return (
            <MobileNavLink
              key={navLink.text}
              text={navLink.text}
              to={navLink.to}
            />
          );
        })}
      </VStack>
    </Collapse>
  </Box>
);
