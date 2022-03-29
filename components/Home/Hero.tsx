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
            spacing={{ base: '1em', md: '2em' }}
            flex="1 0 50%"
        >
            <Heading as="h1" fontSize="3em">
                {`Hey, I'm`}
                <Heading as="span" color="purple.400" fontSize="1em">
                    {' '}
                    HM
                </Heading>
            </Heading>
            <Text>
                Full-Stack Developer - Data Engineer, focused on
                <Text as="span" color="purple.400" fontWeight="bold">
                    {' '}
                    Python & Google Cloud Platform.{' '}
                </Text>
                This is my personal portfolio, where my self taught front-end
                skills are practiced.
            </Text>
            <Button
                as={Link}
                className="hover-color"
                href="#"
                variant="outline"
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
