import { useRef } from 'react';
import NextLink from 'next/link';
import {
    Button,
    ButtonProps,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    HStack,
    Icon,
    IconButton,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import { HiOutlineDocumentText, HiOutlineMail, HiOutlineMenu } from 'react-icons/hi';

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
        <HStack spacing={4}>
            {Links.map((link) => (
                <Button key={link.href} as={NextLink} rightIcon={link.icon} {...link} />
            ))}
        </HStack>
    );
};

export const MobileMenu = () => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
            <IconButton icon={<Icon as={HiOutlineMenu} />} onClick={onOpen} aria-label="" />
            <Drawer isOpen={isOpen} placement="top" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody as={VStack} p={4} alignItems="stretch">
                        {Links.map((link) => (
                            <Button key={link.href} as={NextLink} {...link} />
                        ))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};
