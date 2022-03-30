import { FC } from 'react';
import NextLink from 'next/link';
import {
    Flex,
    VStack,
    Wrap,
    WrapItem,
    SimpleGrid,
    LinkBox,
    LinkOverlay,
    Text,
    Tag,
    Heading,
} from '@chakra-ui/react';

import { MDXFile } from '../../lib/mdx';

const ArticleCard: FC<MDXFile> = ({ frontMatter }) => {
    const { path, title, updatedAt, summary, tags, readingTime } = frontMatter;
    return (
        <LinkBox as="article">
            <NextLink href={path} passHref>
                <LinkOverlay>
                    <VStack
                        spacing="1em"
                        borderWidth="1px"
                        p="1em"
                        align="flex-start"
                    >
                        <Flex w="100%" justify="space-between">
                            <Text>{updatedAt}</Text>
                            <Text>{Math.round(readingTime.minutes)} mins</Text>
                        </Flex>
                        <Heading as="h2" size="md">
                            {title}
                        </Heading>
                        <Text>{summary}</Text>
                        <Wrap>
                            {tags.map((tag, i) => (
                                <WrapItem key={i}>
                                    <Tag>{tag}</Tag>
                                </WrapItem>
                            ))}
                        </Wrap>
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
