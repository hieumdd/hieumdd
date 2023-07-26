import type { NextPage } from 'next';
import { Heading, VStack } from '@chakra-ui/react';

import { ArticleList } from '../../components/article/article-list';
import { MDXFile, getFiles } from '../../services/mdx.service';

type ArticlesProps = {
    articles: MDXFile[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
    return (
        <VStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={4}>
            <Heading as="h2">Articles</Heading>
            <ArticleList articles={articles} />
        </VStack>
    );
};

export const getStaticProps = async () => {
    const articles = await getFiles('article');

    return { props: { title: 'Articles', articles } };
};

export default Articles;
