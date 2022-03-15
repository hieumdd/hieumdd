import React from 'react';
import { Link as GLink } from 'gatsby';
import { Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import Profile from '../static/icons/profile_nord.svg';

const Logo = () => (
  <LinkBox>
    <LinkOverlay as={GLink} to="/">
      <Image boxSize='40px' src={Profile} />
    </LinkOverlay>
  </LinkBox>
);

export default Logo;
