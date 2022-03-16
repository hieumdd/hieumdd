import {
    Flex,
    Icon,
    Container,
    HStack,
    LinkOverlay,
    LinkBox,
} from '@chakra-ui/react';
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

const SocialIcon = ({ icon, link }: Social) => (
    <LinkBox>
        <LinkOverlay href={link} isExternal>
            <Icon fontSize="1.5em" as={icon} display="block"/>
        </LinkOverlay>
    </LinkBox>
);

const Footer = () => (
    <Flex>
        <Container>
            <HStack
                align="center"
                py="2rem"
                spacing="2rem"
                justify={{ base: 'center', md: 'flex-end' }}
            >
                {socials.map((social) => (
                    <SocialIcon key={social.id} {...social} />
                ))}
            </HStack>
        </Container>
    </Flex>
);

export default Footer;
