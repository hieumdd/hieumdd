import { useState, useRef, useEffect } from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import {
    Box,
    Container,
    Flex,
    LinkBox,
    LinkOverlay,
    useDisclosure,
    useOutsideClick,
} from '@chakra-ui/react';

export const Header = () => {
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
            bgColor="nord.50"
            ref={ref}
            className={isScrolled ? 'shadow' : ''}
        >
            <Container>
                <Flex as="nav" flexDirection="column">
                    <Flex py={4} borderRadius={0} justify="space-between">
                        <Box boxSize={8} display={{ base: 'flex', md: 'none' }} />
                        <LinkBox boxSize="40px">
                            <LinkOverlay as={NextLink} href="/" passHref>
                                <NextImage src="/icons/profile_nord.svg" layout="fill" alt="" />
                            </LinkOverlay>
                        </LinkBox>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};
