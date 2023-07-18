import { SimpleGrid } from '@chakra-ui/react';

import { MDXFile } from '../../services/mdx.service';
import { ArticleCard } from './article-card';

type ArticleList = {
    articles: MDXFile[];
};

export const ArticleList = ({ articles }: ArticleList) => (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2em">
        {articles.map((article, i) => (
            <ArticleCard key={i} {...article} />
        ))}
    </SimpleGrid>
);
