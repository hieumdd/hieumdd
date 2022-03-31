import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime, { ReadTimeResults } from 'reading-time';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type FrontMatter = {
    title: string;
    cover: string;
    updatedAt: string;
    summary: string;
    tags: string[];
};

export type MDXFile = {
    content: MDXRemoteSerializeResult;
    frontMatter: FrontMatter & {
        slug: string;
        path: string;
        readingTime: ReadTimeResults;
    };
};

const root = process.cwd();
const dataDir = 'data';

export const getFiles = (type: string) =>
    fs.readdirSync(path.join(root, dataDir, type));

export const getFileFrontMatter = async (
    type: string,
    slug: string,
): Promise<MDXFile> => {
    const source =
        slug &&
        fs.readFileSync(path.join(root, dataDir, type, `${slug}.mdx`), 'utf8');

    const {
        data: { title, cover, updatedAt, summary, tags },
        content: _content,
    } = matter(source);

    const content = await serialize(_content);

    return {
        content,
        frontMatter: {
            slug,
            title,
            cover,
            updatedAt,
            summary,
            tags,
            readingTime: readingTime(_content),
            path: path.join('/', type, slug),
        },
    };
};

export const getAllFilesFrontMatter = async (
    type: string,
): Promise<MDXFile[]> => {
    const files = getFiles(type)
        .map((slug) => slug.replace(/.mdx/, ''))
        .map((slug) => getFileFrontMatter(type, slug));
    return Promise.all(files);
};
