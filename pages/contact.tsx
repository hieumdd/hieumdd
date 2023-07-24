import type { NextPage } from 'next';
import { Stack } from '@chakra-ui/react';
import { IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { InlineWidget } from 'react-calendly';

import { useSocialLinks } from '../hooks/use-social-link';
import { SocialCard } from '../components/social-card';

const Contact: NextPage = () => {
    const { email, github, linkedin } = useSocialLinks();

    return (
        <Stack
            direction={{ base: 'column-reverse', md: 'row' }}
            justifyContent="space-between"
            spacing={4}
        >
            <InlineWidget
                url="https://calendly.com/hieumdd"
                pageSettings={{ hideEventTypeDetails: true, hideGdprBanner: true }}
            />
            <Stack flex="1" direction="column" spacing={4}>
                <SocialCard label="Github" icon={IoLogoGithub} href={github} />
                <SocialCard label="Linkedin" icon={IoLogoLinkedin} href={linkedin} />
                <SocialCard label="Email" icon={IoMdMail} href={email} />
            </Stack>
        </Stack>
    );
};

export const getStaticProps = () => {
    return { props: { title: 'Contact' } };
};

export default Contact;
