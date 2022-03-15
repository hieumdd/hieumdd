import type { NextPage } from 'next';

import Section from '../components/Section';
import Hero from '../components/Hero';
import Expertises from '../components/Expertises';
import TechStacks from '../components/TechStacks';

const Home: NextPage = () => {
    return (
        <>
            <Section>
                <Hero />
            </Section>
            <Section heading="Expertises">
                <Expertises />
            </Section>
            <Section heading="Tech Stacks">
                <TechStacks />
            </Section>
        </>
    );
};

export default Home;
