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
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaEnvelope, FaStream } from 'react-icons/fa';

type MoblileNavLinksProps = {
    isOpen: boolean;
};

type MobileMenuIconProps = MoblileNavLinksProps & {
    onToggle: () => void;
};

const navLinks = [
    {
        text: 'Blog',
        to: '/blog',
        variant: 'outline',
        icon: FaStream,
    },
    {
        text: 'Contacts',
        to: '/contacts',
        variant: 'solid',
        icon: FaEnvelope,
    },
];

const Logo = () => (
    <LinkBox boxSize="40px">
        <NextLink href="/" passHref>
            <LinkOverlay>
                <NextImage src="/icons/profile_nord.svg" layout="fill" alt="" />
            </LinkOverlay>
        </NextLink>
    </LinkBox>
);

const DesktopNavLinks = ({ display }: StackProps) => (
    <HStack spacing="2rem" display={display}>
        {navLinks.map((navLink) => (
            <NextLink key={navLink.to} href={navLink.to} passHref>
                <Button
                    colorScheme="blue"
                    variant={navLink.variant}
                    rightIcon={<Icon as={navLink.icon} />}
                    aria-label={navLink.text}
                >
                    {navLink.text}
                </Button>
            </NextLink>
        ))}
    </HStack>
);

const MobileMenuIcon = ({ isOpen, onToggle }: MobileMenuIconProps) => (
    <IconButton
        display={{ base: 'block', md: 'none' }}
        fontSize="1.5rem"
        onClick={onToggle}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="ghost"
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
                {navLinks.map((navLink) => (
                    <NextLink key={navLink.to} href={navLink.to} passHref>
                        <Button
                            colorScheme="blue"
                            variant={navLink.variant}
                            rightIcon={<Icon as={navLink.icon} />}
                            aria-label={navLink.text}
                        >
                            {navLink.text}
                        </Button>
                    </NextLink>
                ))}
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
                            display={{ base: 'block', md: 'none' }}
                        />
                        <Logo />
                        <DesktopNavLinks
                            display={{ base: 'none', md: 'block' }}
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
