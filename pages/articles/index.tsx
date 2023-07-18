import type { NextPage } from 'next';

import { ArticleList } from '../../components/article/article-list';
import { MDXFile, getFiles } from '../../services/mdx.service';
import { Heading } from '@chakra-ui/react';

type ArticlesProps = {
    articles: MDXFile[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
    return (
        <>
            <Heading as="h2">Articles</Heading>
            <ArticleList articles={articles} />
        </>
    );
};

export const getStaticProps = async () => {
    const articles = await getFiles('articles');

    return { props: { layout: 'articles', title: 'Articles', articles } };
};

export default Articles;
