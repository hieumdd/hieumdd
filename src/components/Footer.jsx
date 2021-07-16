import React from 'react';
import {
  Flex,
  Icon,
  Container,
  HStack,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';

import socials from '../data/socials';

const Footer = () => (
  <Flex>
    <Container>
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
      py='2rem'
      spacing='2rem'
      justify={{ base: 'center', md: 'flex-end' }}
    >
      {socialIcons}
    </HStack>
  );
};

const SocialIcon = ({ icon, link }) => (
  <LinkBox className="hover-shadow">
    <LinkOverlay href={link}>
      <Icon fontSize='1.5rem' as={icon} />
    </LinkOverlay>
  </LinkBox>
);

export default Footer;
