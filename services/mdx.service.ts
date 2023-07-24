import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime, { ReadTimeResults } from 'reading-time';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import dayjs from 'dayjs';

export type FrontMatter = {
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

const getPaths = (type: string) => {
    return fs.readdirSync(path.join(root, dataDir, type)).map((f) => f.replace(/\\/g, '/'));
};

export const getFile = async (type: string, slug: string): Promise<MDXFile> => {
    const source = fs.readFileSync(path.join(root, dataDir, type, `${slug}.mdx`), 'utf8');

    const {
        data: { title, cover, updatedAt, summary, tags },
        content: _content,
    } = matter(source);

    const content = await serialize(_content, { mdxOptions: { remarkPlugins: [[remarkGfm]] } });

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
            path: path.join('/', type, slug).replace(/\\/g, '/'),
        },
    };
};

export const getFiles = async (type: string): Promise<MDXFile[]> => {
    const files = await Promise.all(
        getPaths(type)
            .map((slug) => slug.replace(/.mdx/, ''))
            .map((slug) => getFile(type, slug)),
    ).then((file) => {
        return file.sort((a, b) => {
            return dayjs(a.frontMatter.updatedAt).isAfter(dayjs(b.frontMatter.updatedAt)) ? 1 : -1;
        });
    });

    return Array(25)
        .fill(files)
        .reduce((acc, cur) => [...acc, ...cur], []);
};
