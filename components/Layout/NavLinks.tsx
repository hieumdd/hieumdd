import { FC } from 'react';
import NextLink from 'next/link';
import {
    UseDisclosureProps,
    ButtonProps,
    Flex,
    HStack,
    VStack,
    Button,
    Icon,
    IconButton,
    StackDivider,
    Collapse,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaStream } from 'react-icons/fa';
import { MdClose, MdMenu } from 'react-icons/md';

import Socials from '../Socials';

type MobileProps = {
    isOpen: boolean;
    onClick: UseDisclosureProps['onClose'];
};

type NavLinkProps = {
    title: string;
    href: string;
    icon: IconType;
};

const navLinks: NavLinkProps[] = [
    {
        title: 'Articles',
        href: '/articles',
        icon: FaStream,
    },
];

const MenuButton: FC<NavLinkProps & Pick<MobileProps, 'onClick'>> = ({
    title,
    href,
    icon,
    onClick,
}) => (
    <NextLink href={href} passHref>
        <Button
            className="hover-color"
            variant="outline"
            borderWidth="2px"
            rightIcon={<Icon as={icon} fontSize="md" />}
            lineHeight="1em"
            aria-label={title}
            onClick={onClick}
        >
            {title}
        </Button>
    </NextLink>
);

const NavLinks: FC<Pick<MobileProps, 'onClick'>> = ({ onClick }) => (
    <>
        {navLinks.map((navLink, i) => (
            <MenuButton key={i} onClick={onClick} {...navLink} />
        ))}
    </>
);

export const DesktopNavLinks: FC = () => (
    <HStack spacing="1em" display={{ base: 'none', md: 'flex' }}>
        <Socials />
        <NavLinks onClick={() => {}} />
    </HStack>
);

export const MobileNavLinks: FC<MobileProps> = ({ isOpen, onClick }) => (
    <Flex
        bgColor="inherit"
        pb={isOpen ? '0.5rem' : 'auto'}
        display={{ base: 'block', md: 'none' }}
    >
        <Collapse in={isOpen} animateOpacity>
            <VStack align="flex-end" divider={<StackDivider />}>
                <Socials />
                <NavLinks onClick={onClick} />
            </VStack>
        </Collapse>
    </Flex>
);

export const MobileMenuIcon: FC<MobileProps> = ({ isOpen, onClick }) => (
    <IconButton
        display={{ base: 'flex', md: 'none' }}
        fontSize="1.5rem"
        onClick={onClick}
        icon={isOpen ? <MdClose /> : <MdMenu />}
        aria-label="menu"
    />
);
