import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime, { ReadTimeResults } from 'reading-time';

type FrontMatter = {
    title: string;
    updatedAt: string;
    summary: string;
    tags: string[];
};

export type MDXFile = {
    content: string;
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

export const getFileFrontMatter = (type: string, slug: string): MDXFile => {
    const source =
        slug &&
        fs.readFileSync(path.join(root, dataDir, type, `${slug}.mdx`), 'utf8');

    const {
        data: { title, updatedAt, summary, tags },
        content,
    } = matter(source);

    return {
        content,
        frontMatter: {
            slug,
            title,
            updatedAt,
            summary,
            tags,
            readingTime: readingTime(content),
            path: path.join('/', type, slug),
        },
    };
};

export const getAllFilesFrontMatter = (type: string): MDXFile[] =>
    getFiles(type)
        .map((slug) => slug.replace(/.mdx/, ''))
        .map((slug) => getFileFrontMatter(type, slug));
