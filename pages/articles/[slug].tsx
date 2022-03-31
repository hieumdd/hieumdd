import { NextPage } from 'next';
import { VStack, Text, Heading, Divider } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import { MDXFile, getFiles, getFileFrontMatter } from '../../lib/mdx';
import components from '../../components/Articles/mdxComponents';
import Image from '../../components/@chakra/Image';
import Time from '../../components/Articles/Time';
import Tags from '../../components/Articles/Tags';
import Breadcrumb from '../../components/Articles/Breadcrumb';
import Comment from '../../components/Articles/Comment';

type ArticleMeta = {
    params: {
        slug: string;
    };
};

const Article: NextPage<{ mdx: MDXFile }> = ({ mdx }) => {
    const { content, frontMatter } = mdx;
    const { path, title, cover, summary } = frontMatter;
    return (
        <VStack spacing="1em" align="flex-start" alignItems="stretch">
            <Breadcrumb href={path} title={title} />
            <Image src={cover} alt="title" ratio={21 / 9} />
            <Heading as="h1">{title}</Heading>
            <Time {...frontMatter} />
            <Tags {...frontMatter} />
            <Text as="em">{summary}</Text>
            <Divider />
            <MDXRemote components={components} {...content} />
            <Divider />
            <Comment />
        </VStack>
    );
};

export const getStaticPaths = () => ({
    paths: getFiles('articles').map((p) => ({
        params: {
            slug: p.replace(/\.mdx/, ''),
        },
    })),
    fallback: false,
});

export const getStaticProps = async ({ params }: ArticleMeta) => {
    const mdx = await getFileFrontMatter('articles', params.slug);
    return {
        props: {
            layout: 'articles',
            title: mdx.frontMatter.title,
            mdx,
        },
    };
};

export default Article;
