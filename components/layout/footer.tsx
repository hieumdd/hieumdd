import { Container, Flex, LinkOverlay, LinkBox, Icon, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import dayjs from 'dayjs';

export const Footer = () => {
    return (
        <Container as="footer">
            <Flex justify="space-between" pb="5vh">
                <Text>{dayjs().year()} HM</Text>
                <LinkBox>
                    <LinkOverlay href={process.env.REPO_URL} isExternal>
                        <Icon fontSize="1.5rem" as={FaGithub} display="block" />
                    </LinkOverlay>
                </LinkBox>
            </Flex>
        </Container>
    );
};
