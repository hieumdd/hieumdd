import NextLink from 'next/link';
import NextImage from 'next/image';
import { Box, Container, Flex, LinkBox, LinkOverlay } from '@chakra-ui/react';
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
            boxShadow={y > 0 ? 'md' : 'none'}
        >
            <Container as="nav" flex="1" py={4} display="flex" justifyContent="space-between">
                <Box display={{ base: 'block', md: 'none' }} boxSize={10} />
                <LinkBox boxSize={10}>
                    <LinkOverlay as={NextLink} href="/" passHref>
                        <NextImage src={profileNord} alt="" fill/>
                    </LinkOverlay>
                </LinkBox>
                <DesktopMenu />
                <MobileMenu />
            </Container>
        </Flex>
    );
};
