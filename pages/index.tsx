import type { NextPage } from 'next';

import { SectionStack, Section } from '../components/Layout/Section';
import Hero from '../components/Home/Hero';
import Capabilities from '../components/Home/Capabilities';

const Home: NextPage = () => {
    return (
        <SectionStack>
            <Section>
                <Hero />
            </Section>
            <Section heading="What I do">
                <Capabilities />
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
