import { Container, LinkOverlay, LinkBox, Icon, Text, VStack } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io';
import dayjs from 'dayjs';

import { useSocialLinks } from '../../hooks/use-social-link';

export const Footer = () => {
    const { repo } = useSocialLinks();

    return (
        <Container as="footer" my={8} display="flex" flexDirection="column" alignItems="center">
            <LinkBox as={VStack} spacing={4}>
                <LinkOverlay href={repo} isExternal>
                    <Icon fontSize="1.5rem" as={IoLogoGithub} display="block" />
                </LinkOverlay>
                <Text>HM @ {dayjs().year()}</Text>
            </LinkBox>
        </Container>
    );
};
