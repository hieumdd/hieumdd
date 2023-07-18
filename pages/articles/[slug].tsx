import { NextPage } from 'next';
import NextLink from 'next/link';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    VStack,
    Text,
    Heading,
    Divider,
} from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import { PageProps } from '../_app';
import { MDXFile, getFiles, getFile } from '../../services/mdx.service';
import { components } from '../../components/article/mdx';
import { ArticleImage } from '../../components/article/article-image';
import { ArticleReadingTime } from '../../components/article/article-reading-time';
import { ArticleTags } from '../../components/article/article-tags';
import { ArticleComment } from '../../components/article/article-comment';

type ArticleProps = PageProps & { mdx: MDXFile };

const Article: NextPage<ArticleProps> = ({ mdx }) => {
    const { content, frontMatter } = mdx;
    const { path, title, cover, summary } = frontMatter;

    return (
        <VStack spacing="1em" align="flex-start" alignItems="stretch">
            <Breadcrumb>
                <BreadcrumbItem>
                    <NextLink href="/" passHref>
                        <BreadcrumbLink>Home</BreadcrumbLink>
                    </NextLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <NextLink href={path} passHref>
                        <BreadcrumbLink isCurrentPage>{title}</BreadcrumbLink>
                    </NextLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <ArticleImage src={cover} alt={title} ratio={21 / 9} />
            <Heading as="h1">{title}</Heading>
            <ArticleReadingTime {...frontMatter} />
            <ArticleTags {...frontMatter} />
            <Text as="em">{summary}</Text>
            <Divider />
            <MDXRemote components={components} {...content} />
            <Divider />
            <ArticleComment />
        </VStack>
    );
};

type ArticleMeta = { params: { slug: string } };

export const getStaticPaths = async () => {
    const articles = await getFiles('articles');

    return {
        paths: articles.map((article) => ({ params: { slug: article.frontMatter.slug } })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }: ArticleMeta) => {
    const mdx = await getFile('articles', params.slug);

    return { props: { title: mdx.frontMatter.title, mdx } };
};

export default Article;
