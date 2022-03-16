import Lottie from 'react-lottie';
import { Stack, Heading, Text, Box } from '@chakra-ui/react';

import animationData from '../public/lottie/hello.json';

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
            md: 'space-around',
            xl: 'space-between',
        }}
        spacing="4em"
    >
        <Stack
            direction="column"
            align="flex-start"
            textAlign="left"
            spacing={{ base: 5, md: 10 }}
        >
            <Heading as="h2">{`Hey, I'm HM`}</Heading>
            <Text>
                Welcome to my personal portfolio/blog. This is the place where I
                teach myself React & all the digital analytics tracking
            </Text>
        </Stack>
        <Box>
            <Lottie options={options} />
        </Box>
    </Stack>
);

export default Hero;
