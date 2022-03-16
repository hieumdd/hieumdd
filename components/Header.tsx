import { useState, useRef, useEffect } from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import {
    LinkBox,
    LinkOverlay,
    Box,
    Flex,
    Container,
    Collapse,
    StackDivider,
    IconButton,
    VStack,
    HStack,
    Button,
    Icon,
    useDisclosure,
    useOutsideClick,
    StackProps,
} from '@chakra-ui/react';
import { FaEnvelope, FaStream } from 'react-icons/fa';
import { MdClose, MdMenu } from 'react-icons/md';

import Socials from '../components/Socials';

type MoblileNavLinksProps = {
    isOpen: boolean;
};

type MobileMenuIconProps = MoblileNavLinksProps & {
    onToggle: () => void;
};

const Logo = () => (
    <LinkBox boxSize="40px">
        <NextLink href="/" passHref>
            <LinkOverlay>
                <NextImage src="/icons/profile_nord.svg" layout="fill" alt="" />
            </LinkOverlay>
        </NextLink>
    </LinkBox>
);

const BlogButton = () => (
    <NextLink href="/blog" passHref>
        <Button
            colorScheme="blue"
            variant="outline"
            rightIcon={<Icon as={FaStream} />}
            aria-label="Blog"
        >
            Blog
        </Button>
    </NextLink>
);

const DesktopNavLinks = ({ display }: StackProps) => (
    <HStack spacing="2rem" display={display}>
        <Socials />
        <BlogButton />
    </HStack>
);

const MobileMenuIcon = ({ isOpen, onToggle }: MobileMenuIconProps) => (
    <IconButton
        display={{ base: 'flex', md: 'none' }}
        fontSize="1.5rem"
        onClick={onToggle}
        icon={isOpen ? <MdClose /> : <MdMenu />}
        aria-label="menu"
    />
);

export const MobileNavLinks = ({ isOpen }: MoblileNavLinksProps) => (
    <Flex
        bgColor="white"
        pb={isOpen ? '0.5rem' : 'auto'}
        display={{ base: 'block', md: 'none' }}
    >
        <Collapse in={isOpen} animateOpacity>
            <VStack align="flex-end" divider={<StackDivider />}>
                <Socials />
                <BlogButton />
            </VStack>
        </Collapse>
    </Flex>
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
            bgColor="white"
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
                        <DesktopNavLinks
                            display={{ base: 'none', md: 'flex' }}
                        />
                        <MobileMenuIcon isOpen={isOpen} onToggle={onToggle} />
                    </Flex>
                    <MobileNavLinks isOpen={isOpen} />
                </Flex>
            </Container>
        </Flex>
    );
};

export default Header;
