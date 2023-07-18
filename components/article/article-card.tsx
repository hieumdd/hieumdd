import NextLink from 'next/link';
import { VStack, LinkBox, LinkOverlay, Text, Heading } from '@chakra-ui/react';

import { ArticleImage } from './article-image';
import { ArticleReadingTime } from './article-reading-time';
import { ArticleTags } from './article-tags';
import { MDXFile } from '../../services/mdx.service';

export const ArticleCard = ({ frontMatter }: MDXFile) => {
    const { path, title, cover, summary } = frontMatter;

    return (
        <LinkBox className="hover-color" as="article" borderWidth="2px">
            <NextLink href={path} passHref>
                <LinkOverlay>
                    <VStack
                        spacing="1em"
                        p="1em"
                        align="flex-start"
                        alignItems="stretch"
                        role="group"
                    >
                        <ArticleReadingTime {...frontMatter} />
                        <ArticleImage src={cover} alt="title" ratio={2 / 1} />
                        <Heading as="h2" size="md">
                            {title}
                        </Heading>
                        <Text>{summary}</Text>
                        <ArticleTags {...frontMatter} />
                    </VStack>
                </LinkOverlay>
            </NextLink>
        </LinkBox>
    );
};
