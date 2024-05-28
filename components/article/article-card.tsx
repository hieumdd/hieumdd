import NextLink from 'next/link';
import { Card, CardBody, Heading, LinkBox, LinkOverlay, Text, VStack } from '@chakra-ui/react';

import { ArticleImage } from './article-image';
import { ArticleReadingTime } from './article-reading-time';
import { ArticleTags } from './article-tags';
import { MDXFile } from '../../services/mdx.service';

export const ArticleCard = ({ frontMatter }: MDXFile) => {
    const { path, title, cover, summary } = frontMatter;

    return (
        <Card as="article">
            <CardBody as={LinkBox}>
                <VStack spacing={4} align="flex-start" alignItems="stretch" role="group">
                    <ArticleReadingTime {...frontMatter} />
                    <ArticleImage src={cover} alt="title" ratio={2 / 1} />
                    <LinkOverlay as={NextLink} href={path} passHref>
                        <Heading as="h2" size="md">
                            {title}
                        </Heading>
                    </LinkOverlay>
                    <Text>{summary}</Text>
                    <ArticleTags {...frontMatter} />
                </VStack>
            </CardBody>
        </Card>
    );
};
