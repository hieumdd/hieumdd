import type { NextPage } from 'next';

import { SectionStack, Section } from '../../components/Layout/Section';
import Listing from '../../components/Articles/Listing';

import { getAllFilesFrontMatter } from '../../lib/mdx';
import { MDXFile } from '../../lib/mdx';

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
        articles: Array(25)
            .fill(await getAllFilesFrontMatter('articles'))
            .reduce((acc, cur) => [...acc, ...cur], []),
    },
});

export default Articles;
