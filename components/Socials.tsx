import { ReactElement } from 'react';
import { HStack, IconButton, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
    FaFacebook,
    FaLinkedin,
    FaGithub,
    FaRegEnvelope,
} from 'react-icons/fa';

type Social = {
    icon: ReactElement;
    link: string;
    text: string;
};

const socials: Social[] = [
    {
        icon: <FaFacebook fontSize="20px"/>,
        link: 'https://facebook.com/hieumdd',
        text: '/hieumdd',
    },
    {
        icon: <FaLinkedin fontSize="20px"/>,
        link: 'https://linkedin.com/hieumdd',
        text: '/hieumdd',
    },
    {
        icon: <FaGithub fontSize="20px"/>,
        link: 'https://github.com/hieumdd',
        text: '/hieumdd',
    },
    {
        icon: <FaRegEnvelope fontSize="20px"/>,
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
                borderWidth="2px"
                p="0.5em"
            >
                <LinkOverlay href={social.link} isExternal>
                    <IconButton
                        as="a"
                        icon={social.icon}
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
