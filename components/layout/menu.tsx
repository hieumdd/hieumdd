import NextLink from 'next/link';
import {
    Box,
    Button,
    ButtonProps,
    HStack,
    Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import { HiOutlineDocumentText, HiOutlineMail, HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

type Link = {
    children: string;
    href: string;
    variant: ButtonProps['variant'];
    icon: ButtonProps['rightIcon'];
};

const Links: Link[] = [
    {
        children: 'Articles',
        href: '/article',
        variant: 'outline',
        icon: <Icon as={HiOutlineDocumentText} />,
    },
    {
        children: 'Contact',
        href: '/contact',
        variant: 'solid',
        icon: <Icon as={HiOutlineMail} />,
    },
];

export const DesktopMenu = () => {
    return (
        <HStack display={{ base: 'none', md: 'flex' }} spacing={4}>
            {Links.map((link) => (
                <Button key={link.href} as={NextLink} rightIcon={link.icon} {...link} />
            ))}
        </HStack>
    );
};

export const MobileMenu = () => {
    return (
        <Box display={{ base: 'block', md: 'none' }}>
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton
                            as={IconButton}
                            icon={isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                        />
                        <MenuList>
                            {Links.map((link) => (
                                <MenuItem key={link.href} as={NextLink} {...link} />
                            ))}
                        </MenuList>
                    </>
                )}
            </Menu>
        </Box>
    );
};
