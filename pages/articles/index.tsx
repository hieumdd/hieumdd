import type { NextPage } from 'next';

import { SectionStack, Section } from '@/components/Layout/Section';
import { Listing } from '@/components/Articles/Articles';

import { MDXFile, getAllFilesFrontMatter } from '@/lib/mdx';

type ArticleProps = { articles: MDXFile[] };

const Articles: NextPage<ArticleProps> = ({ articles }) => (
    <SectionStack>
        <Section heading="Articles">
            <Listing articles={articles} />
        </Section>
    </SectionStack>
);

export const getStaticProps = async () => ({
    props: {
        layout: 'home',
        title: 'Articles',
        articles: await getAllFilesFrontMatter('articles'),
    },
});

export default Articles;
