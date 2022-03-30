import type { NextPage } from 'next';

import { SectionStack, Section } from '../components/Layout/Section';
import ArticlesListing from '../components/Articles';

import { getAllFilesFrontMatter } from '../lib/mdx';
import { MDXFile } from '../lib/mdx';

type ArticleProps = { articles: MDXFile[] };

const Articles: NextPage<ArticleProps> = ({ articles }) => (
    <SectionStack>
        <Section heading="Articles">
            <ArticlesListing articles={articles} />
        </Section>
    </SectionStack>
);

export const getStaticProps = () => ({
    props: {
        title: 'Articles',
        articles: getAllFilesFrontMatter('articles'),
    },
});

export default Articles;
