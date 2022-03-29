import Lottie from 'react-lottie';
import { Stack, Heading, Text, Box, Button, Link } from '@chakra-ui/react';

import { HiExternalLink } from 'react-icons/hi';

import animationData from '../../public/lottie/hello.json';

const options = {
    animationData,
    renderer: 'svg',
    loop: true,
    autoplay: true,
};

const Hero = () => (
    <Stack
        align="center"
        direction={{ base: 'column-reverse', md: 'row' }}
        justify={{
            base: 'center',
            md: 'space-between',
        }}
        spacing="4em"
    >
        <Stack
            direction="column"
            align="flex-start"
            textAlign="left"
            spacing={{ base: "1em", md: "2em" }}
            flex="1 0 50%"
        >
            <Heading as="h1">{`Hey, I'm HM`}</Heading>
            <Text>
                Welcome to my personal portfolio/blog. This is the place where I
                teach myself React & all the digital analytics tracking
            </Text>
            <Button
                as={Link}
                href="#"
                colorScheme="blue"
                variant="solid"
                rightIcon={<HiExternalLink />}
                isExternal
            >
                Get my CV
            </Button>
        </Stack>
            
        <Box flex="0 0 40%">
            <Lottie options={options} />
        </Box>
    </Stack>
);

export default Hero;
