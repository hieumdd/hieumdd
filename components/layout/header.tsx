import NextLink from 'next/link';
import NextImage from 'next/image';
import { Box, Container, Flex, LinkBox, LinkOverlay, Show } from '@chakra-ui/react';
import { useWindowScroll } from 'react-use';

import { DesktopMenu, MobileMenu } from './menu';
import profileNord from '../../public/icon/profile-nord.svg';

export const Header = () => {
    const { y } = useWindowScroll();

    return (
        <Flex
            as="header"
            position="fixed"
            top={0}
            width="100%"
            zIndex={999}
            bgColor="white"
            boxShadow={y > 0 ? 'base' : 'none'}
        >
            <Container as="nav" flex="1" py={4} display="flex" justifyContent="space-between">
                <Show below="md">
                    <Box boxSize={10} />
                </Show>
                <LinkBox boxSize={10}>
                    <LinkOverlay as={NextLink} href="/" passHref>
                        <NextImage src={profileNord} alt="" fill />
                    </LinkOverlay>
                </LinkBox>
                <Show above="md">
                    <DesktopMenu />
                </Show>
                <Show below="md">
                    <MobileMenu />
                </Show>
            </Container>
        </Flex>
    );
};
