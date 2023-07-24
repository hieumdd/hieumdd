import type { NextPage } from 'next';
import { SimpleGrid } from '@chakra-ui/react';
import { IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

import { useSocialLinks } from '../hooks/use-social-link';
import { SocialCard } from '../components/social-card';

const Contact: NextPage = () => {
    const { email, github, linkedin } = useSocialLinks();

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <SocialCard label="Github" icon={IoLogoGithub} href={github} />
            <SocialCard label="Linkedin" icon={IoLogoLinkedin} href={linkedin} />
            <SocialCard label="Email" icon={IoMdMail} href={email} />
        </SimpleGrid>
    );
};

export const getStaticProps = () => {
    return { props: { title: 'Contact' } };
};

export default Contact;
