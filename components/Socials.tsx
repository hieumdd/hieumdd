import { HStack, IconButton, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
    FaFacebook,
    FaLinkedin,
    FaGithub,
    FaRegEnvelope,
} from 'react-icons/fa';

type Social = {
    icon: IconType;
    link: string;
    text: string;
};

const socials: Social[] = [
    {
        icon: FaFacebook,
        link: 'https://facebook.com/hieumdd',
        text: '/hieumdd',
    },
    {
        icon: FaLinkedin,
        link: 'https://linkedin.com/hieumdd',
        text: '/hieumdd',
    },
    {
        icon: FaGithub,
        link: 'https://github.com/hieumdd',
        text: '/hieumdd',
    },
    {
        icon: FaRegEnvelope,
        link: 'mailto:hieumdd@gmail.com',
        text: 'hieumdd@gmail.com',
    },
];

const Socials = () => (
    <HStack spacing="1em">
        {socials.map((social, i) => (
            <LinkBox
                key={i}
                className="hover-color"
                role="group"
                borderWidth="1px"
                p="0.5em"
            >
                <LinkOverlay href={social.link} isExternal>
                    <IconButton
                        as={social.icon}
                        className="hover-color"
                        size="xs"
                        variant="unstyled"
                        aria-label={social.text}
                    />
                </LinkOverlay>
            </LinkBox>
        ))}
    </HStack>
);

export default Socials;
