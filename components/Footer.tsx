import { Flex, Icon, Container, LinkOverlay, LinkBox } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
    <Flex>
        <Container>
            <Flex justify={{ base: 'center', md: 'flex-end' }} pb="5vh">
                <LinkBox>
                    <LinkOverlay
                        href="https://github.com/hieumdd/hieumdd.git"
                        isExternal
                    >
                        <Icon fontSize="1.5em" as={FaGithub} display="block" />
                    </LinkOverlay>
                </LinkBox>
            </Flex>
        </Container>
    </Flex>
);

export default Footer;
