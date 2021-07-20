import React from 'react';
import { Link as GLink } from 'gatsby';
import {
  Collapse,
  StackDivider,
  IconButton,
  Flex,
  VStack,
  HStack,
  Button,
  Icon,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaEnvelope, FaStream } from 'react-icons/fa';

const navLinksData = [
  {
    text: 'Blog',
    to: '/blog',
    variant: 'outline',
    icon: <Icon as={FaStream}/>,
  },
  {
    text: 'Contacts',
    to: '/contacts',
    variant: 'solid',
    icon: <Icon as={FaEnvelope}/>,
  },
];

export const DesktopNavLinks = () => (
  <HStack display={{ base: 'none', md: 'flex' }} spacing="2rem">
    {navLinksData.map((navLink) => (
      <Button
        key={navLink.to}
        as={GLink}
        to={navLink.to}
        colorScheme="blue"
        variant={navLink.variant}
        rightIcon={navLink.icon}
        aria-label={navLink.text}
      >
        {navLink.text}
      </Button>
    ))}
  </HStack>
);

export const MobileMenuIcon = ({ isOpen, onToggle }) => (
  <IconButton
    display={{ base: 'block', md: 'none' }}
    fontSize="1.5rem"
    onClick={onToggle}
    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
    variant="ghost"
    aria-label="menu"
  />
);

export const MobileNavLinks = ({ isOpen }) => (
  <Flex
    bgColor="white"
    pb={isOpen ? '0.5rem' : 'auto'}
    display={{ base: 'block', md: 'none' }}
  >
    <Collapse in={isOpen} animateOpacity>
      <VStack align="flex-end" divider={<StackDivider />}>
        {navLinksData.map((navLink) => (
          <Button
            key={navLink.to}
            as={GLink}
            to={navLink.to}
            colorScheme="blue"
            variant={navLink.variant}
            rightIcon={navLink.icon}
            aria-label={navLink.text}
          >
            {navLink.text}
          </Button>
        ))}
      </VStack>
    </Collapse>
  </Flex>
);
