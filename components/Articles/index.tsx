import { FC } from 'react';
import NextLink from 'next/link';
import {
    VStack,
    SimpleGrid,
    LinkBox,
    LinkOverlay,
    Text,
    Heading,
} from '@chakra-ui/react';

import Image from '../@chakra/Image';
import Time from './Time';
import Tags from './Tags';
import { MDXFile } from '../../lib/mdx';

const ArticleCard: FC<MDXFile> = ({ frontMatter }) => {
    const { path, title, cover, summary } = frontMatter;
    return (
        <LinkBox as="article">
            <NextLink href={path} passHref>
                <LinkOverlay>
                    <VStack
                        spacing="1em"
                        borderWidth="1px"
                        p="1em"
                        align="flex-start"
                        alignItems="stretch"
                    >
                        <Time {...frontMatter} />
                        <Image src={cover} alt="title" ratio={2 / 1} />
                        <Heading as="h2" size="md">
                            {title}
                        </Heading>
                        <Text>{summary}</Text>
                        <Tags {...frontMatter} />
                    </VStack>
                </LinkOverlay>
            </NextLink>
        </LinkBox>
    );
};

const ArticlesListing: FC<{ articles: MDXFile[] }> = ({ articles }) => (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2em">
        {articles.map((article, i) => (
            <ArticleCard key={i} {...article} />
        ))}
    </SimpleGrid>
);

export default ArticlesListing;
