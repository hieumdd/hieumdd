import React from 'react';
import {
  Flex,
  Icon,
  Container,
  HStack,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';

import socials from './socials';

const Footer = () => (
  <Flex>
    <Container className="container">
      <SocialIcons />
    </Container>
  </Flex>
);

const SocialIcons = () => {
  const socialIcons = socials.map((socialItem) => (
    <SocialIcon
      key={socialItem.id}
      icon={socialItem.icon}
      link={socialItem.link}
      text={socialItem.text}
    />
  ));
  return (
    <HStack
      align="center"
      py={5}
      spacing={10}
      justify={{ base: 'center', md: 'flex-end' }}
    >
      {socialIcons}
    </HStack>
  );
};

const SocialIcon = ({ icon, link }) => (
  <LinkBox className="hover-shadow">
    <LinkOverlay href={link}>
      <Icon boxSize={6} as={icon} />
    </LinkOverlay>
  </LinkBox>
);

export default Footer;
