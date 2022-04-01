import { FC, useState, useRef, useEffect } from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import {
    LinkBox,
    LinkOverlay,
    Box,
    Flex,
    Container,
    useDisclosure,
    useOutsideClick,
} from '@chakra-ui/react';

import { DesktopNavLinks, MobileNavLinks, MobileMenuIcon } from './NavLinks';

const Logo = () => (
    <LinkBox boxSize="40px">
        <NextLink href="/" passHref>
            <LinkOverlay>
                <NextImage src="/icons/profile_nord.svg" layout="fill" alt="" />
            </LinkOverlay>
        </NextLink>
    </LinkBox>
);

const Header = () => {
    const ref = useRef(null);
    const { isOpen, onClose, onToggle } = useDisclosure();
    const [isScrolled, setScrolled] = useState(false);

    useOutsideClick({
        ref,
        handler: () => onClose(),
    });

    useEffect(() => {
        const handleScrolled = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 0) {
                setScrolled(true);
            } else if (scrolled === 0) {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScrolled);
    }, []);

    return (
        <Flex
            as="header"
            pos="fixed"
            borderRadius={0}
            width="100%"
            zIndex={999}
            bgColor="gray.50"
            ref={ref}
            className={isScrolled ? 'shadow' : ''}
        >
            <Container>
                <Flex as="nav" direction="column">
                    <Flex py={4} borderRadius={0} justify="space-between">
                        <Box
                            boxSize={8}
                            display={{ base: 'flex', md: 'none' }}
                        />
                        <Logo />
                        <DesktopNavLinks />
                        <MobileMenuIcon isOpen={isOpen} onClick={onToggle} />
                    </Flex>
                    <MobileNavLinks isOpen={isOpen} onClick={() => onClose()} />
                </Flex>
            </Container>
        </Flex>
    );
};

export default Header;
