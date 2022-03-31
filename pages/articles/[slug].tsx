import { NextPage } from 'next';
import { VStack } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import components from '../../components/Articles/mdxComponents';
import { MDXFile, getFiles, getFileFrontMatter } from '../../lib/mdx';

type ArticleMeta = {
    params: {
        slug: string;
    };
};

const Articles: NextPage<{ mdx: MDXFile }> = ({ mdx }) => {
    const { content, frontMatter } = mdx;
    // console.log(content)
    return (
        <VStack spacing="1em" align="flex-start">
            <MDXRemote components={components} {...content} />
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
            mdx,
        },
    };
};

export default Articles;
