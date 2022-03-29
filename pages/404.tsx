import NextLink from 'next/link';
import { VStack, Button, Text } from '@chakra-ui/react';
import { Section } from '../components/Layout/Section';

const NotFound = () => (
    <Section>
        <VStack w="100%">
            <Text>The requested link is not found</Text>
            <NextLink href="/" passHref>
                <Button
                    className="hover-color"
                    w="100%"
                    variant="outline"
                    borderWidth="2px"
                    aria-label="Home"
                >
                    Home
                </Button>
            </NextLink>
        </VStack>
    </Section>
);

export const getStaticProps = async () => ({
    props: {
        title: '404',
    },
});

export default NotFound;
