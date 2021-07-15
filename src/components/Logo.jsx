import React from 'react';
import { Link as GLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { LinkBox, LinkOverlay} from '@chakra-ui/react';

const Logo = () => (
  <LinkBox>
    <LinkOverlay as={GLink} to="/">
      <StaticImage
        width={40}
        style={{ borderRadius: '50%' }}
        src="../static/icons/profile_nord.svg"
      />
    </LinkOverlay>
  </LinkBox>
);

export default Logo;
