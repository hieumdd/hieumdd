import React, { useEffect, useRef } from 'react';
import {
  HStack,
  VStack,
  Stack,
  Heading,
  Text,
  Box,
  Button,
} from '@chakra-ui/react';
import { Link as GLink } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import lottie from 'lottie-web';
import { FaUserCircle, FaStream } from 'react-icons/fa';

import hello from '../static/lottie/hello.json';

const Hero = () => {
  const lottieBox = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieBox.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: hello,
    });
    return () => lottie.stop();
  }, []);

  return (
    <Stack
      align="center"
      direction={{ base: 'column-reverse', md: 'row' }}
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      spacing={['2.5vh', '10vh']}
    >
      <CTA />
      <Box ref={lottieBox} align={{ base: 'center', md: 'flex-start' }} />
    </Stack>
  );
};

const CTA = () => (
  <VStack
    justify="center"
    align={{ base: 'center', md: 'flex-start' }}
    textAlign={{ base: 'center', md: 'left' }}
    maxW={{ base: 'auto', md: '50%' }}
    spacing={{ base: 5, md: 10 }}
  >
    <Heading as="h2">Hi there!</Heading>
    <Text>
      Welcome to my personal portfolio/blog. This is the place where I teach
      myself React & all the digital analytics tracking
    </Text>
    <HStack spacing="2rem">
      <Button
        as={AnchorLink}
        to="#about"
        colorScheme="blue"
        leftIcon={<FaUserCircle />}
      >
        About me
      </Button>
      <Button
        as={GLink}
        to="/blog"
        colorScheme="blue"
        variant="outline"
        leftIcon={<FaStream />}
      >
        Blogs
      </Button>
    </HStack>
  </VStack>
);

export default Hero;
