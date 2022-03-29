import type { NextPage } from 'next';

import { SectionStack, Section } from '../components/Layout/Section';
import Hero from '../components/Home/Hero';
import Expertise from '../components/Home/Expertise';

const Home: NextPage = () => {
    return (
        <SectionStack>
            <Section>
                <Hero />
            </Section>
            <Section heading="Primary Expertises">
                <Expertise />
            </Section>
        </SectionStack>
    );
};

export const getStaticProps = async () => ({
    props: {
        title: 'Home',
    },
});

export default Home;
