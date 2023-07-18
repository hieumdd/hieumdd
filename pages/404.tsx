import NextLink from 'next/link';
import { VStack, Button, Text } from '@chakra-ui/react';

const NotFound = () => {
    return (
        <VStack w="100%">
            <Text>The requested link is not found</Text>
            <NextLink href="/" passHref>
                <Button>Home</Button>
            </NextLink>
        </VStack>
    );
};

export const getStaticProps = () => ({ props: { title: '404' } });

export default NotFound;
