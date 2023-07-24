import { Container, LinkOverlay, LinkBox, Icon, Text } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io';
import dayjs from 'dayjs';

import { useSocialLinks } from '../../hooks/use-social-link';

export const Footer = () => {
    const { repo } = useSocialLinks();

    return (
        <Container as="footer" my={8} display="flex" justifyContent="space-between">
            <Text>HM @ {dayjs().year()}</Text>
            <LinkBox>
                <LinkOverlay href={repo} isExternal>
                    <Icon fontSize="1.5rem" as={IoLogoGithub} display="block" />
                </LinkOverlay>
            </LinkBox>
        </Container>
    );
};
