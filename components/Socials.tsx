import { HStack, IconButton, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
    FaFacebook,
    FaLinkedin,
    FaGithub,
    FaRegEnvelope,
} from 'react-icons/fa';

type Social = {
    id: string;
    icon: IconType;
    link: string;
    text: string;
};

const socials: Social[] = [
    {
        id: 'facebook',
        icon: FaFacebook,
        link: 'https://facebook.com/hieumdd',
        text: '/hieumdd',
    },
    {
        id: 'linkedin',
        icon: FaLinkedin,
        link: 'https://linkedin.com/hieumdd',
        text: '/hieumdd',
    },
    {
        id: 'github',
        icon: FaGithub,
        link: 'https://github.com/hieumdd',
        text: '/hieumdd',
    },
    {
        id: 'email',
        icon: FaRegEnvelope,
        link: 'mailto:hieumdd@gmail.com',
        text: 'hieumdd@gmail.com',
    },
];

const Socials = () => (
    <HStack align="center" spacing="2em">
        {socials.map((social) => (
            <LinkBox key={social.id}>
                <LinkOverlay href={social.link}>
                    <IconButton
                        as={social.icon}
                        // textColor="blue.700"
                        colorScheme="blue"
                        size="xs"
                        display="block"
                        variant="link"
                        aria-label=""
                    />
                </LinkOverlay>
            </LinkBox>
        ))}
    </HStack>
);

export default Socials;
