import React from 'react';
import { Link as GLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';

const Logo = () => (
  <LinkBox>
    <LinkOverlay as={GLink} to="/">
      <StaticImage
        src="../static/icons/profile_nord.svg"
        alt=""
        width={40}
        loading="eager"
        style={{ borderRadius: '50%' }}
        layout="fixed"
      />
    </LinkOverlay>
  </LinkBox>
);

export default Logo;
