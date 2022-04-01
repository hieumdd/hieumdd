import type { NextPage } from 'next';

import { SectionStack, Section } from '../components/Layout/Section';
import { PageProps } from '../components/Layout';
import Hero from '../components/Home/Hero';
import Expertise from '../components/Home/Expertise';
import { Articles } from '../components/Articles/Articles';

import { MDXFile, getAllFilesFrontMatter } from '../lib/mdx';

type Props = PageProps & {
    articles: MDXFile[];
};

const Home: NextPage<Props> = ({ articles }) => (
    <SectionStack>
        <Section>
            <Hero />
        </Section>
        <Section heading="Primary Expertises">
            <Expertise />
        </Section>
        <Section heading="Latest Articles">
            <Articles articles={articles} />
        </Section>
    </SectionStack>
);

export const getStaticProps = async () => ({
    props: {
        layout: 'home',
        title: 'Home',
        articles: (await getAllFilesFrontMatter('articles')).slice(0, 2),
    },
});

export default Home;
