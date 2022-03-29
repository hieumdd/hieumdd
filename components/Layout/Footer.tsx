import {
    Flex,
    Container,
    LinkOverlay,
    LinkBox,
    Text,
    Icon,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import dayjs from 'dayjs';

const Footer = () => (
    <Container as="footer">
        <Flex justify="space-between" pb="5vh">
            <Text>&copy; {dayjs().year()} HM</Text>
            <LinkBox>
                <LinkOverlay href={process.env.REPO_URL} isExternal>
                    <Icon fontSize="1.5em" as={FaGithub} display="block" />
                </LinkOverlay>
            </LinkBox>
        </Flex>
    </Container>
);

export default Footer;
