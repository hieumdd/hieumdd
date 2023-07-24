import { useState, useRef, useEffect } from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import {
    Container,
    Flex,
    LinkBox,
    LinkOverlay,
    useDisclosure,
    useOutsideClick,
} from '@chakra-ui/react';
import { useWindowScroll } from 'react-use';

import { DesktopMenu, MobileMenu } from './menu';

export const Header = () => {
    const { y } = useWindowScroll();

    return (
        <Flex
            as="header"
            position="fixed"
            top={0}
            width="100%"
            zIndex={999}
            bgColor="nord.50"
            boxShadow={y > 0 ? 'md' : 'none'}
        >
            <Container as="nav" flex="1" py={4} display="flex" justifyContent="space-between">
                <LinkBox boxSize="40px">
                    <LinkOverlay as={NextLink} href="/" passHref>
                        <NextImage src="/icons/profile_nord.svg" layout="fill" alt="" />
                    </LinkOverlay>
                </LinkBox>
                <DesktopMenu />
                <MobileMenu />
            </Container>
        </Flex>
    );
};
