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

import Image from '../@chakra/Image';
import { MDXFile } from '../../lib/mdx';

const ArticleCard: FC<MDXFile> = ({ frontMatter }) => {
    const { path, title, cover, updatedAt, summary, tags, readingTime } =
        frontMatter;
    console.log(frontMatter);
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
                        <Flex justify="space-between">
                            <Text>{updatedAt}</Text>
                            <Text>{Math.round(readingTime.minutes)} mins</Text>
                        </Flex>
                        <Image src={cover} alt="title" ratio={2 / 1} />
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
