import type { NextPage } from 'next';

import Section from '../components/Section';
import Hero from '../components/Hero';
import Capabilities from '../components/Capabilities';

const Home: NextPage = () => {
    return (
        <>
            <Section>
                <Hero />
            </Section>
            <Section heading="What I do">
                <Capabilities />
            </Section>
        </>
    );
};

export default Home;
