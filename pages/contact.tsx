import type { NextPage } from 'next';
import { Center, SimpleGrid, Stack } from '@chakra-ui/react';
import { IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { useLottie } from 'lottie-react';

import { useSocialLinks } from '../hooks/use-social-link';
import { SocialCard } from '../components/social-card';
import animationData from '../public/lottie/contact.json';

const Contact: NextPage = () => {
    const { View: LottieView } = useLottie({ animationData, loop: true, autoplay: true }, { width: 240, height: 240 });

    const { email, github, linkedin } = useSocialLinks();

    return (
        <Stack
            direction={{ base: 'column-reverse', md: 'row' }}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={8}
        >
            <Stack flex="1" direction="column" spacing={4}>
                <SocialCard label="Github" icon={IoLogoGithub} href={github} />
                <SocialCard label="Linkedin" icon={IoLogoLinkedin} href={linkedin} />
                <SocialCard label="Email" icon={IoMdMail} href={email} />
            </Stack>
            <Center>{LottieView}</Center>
        </Stack>
    );
};

export const getStaticProps = () => {
    return { props: { title: 'Contact' } };
};

export default Contact;
