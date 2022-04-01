import { FC, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Pagination from '@choc-ui/paginator';

import Card from './Card';
import { MDXFile } from '../../lib/mdx';

type Props = {
    articles: MDXFile[];
};

export const Articles: FC<Props> = ({ articles }) => (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2em">
        {articles.map((article, i) => (
            <Card key={i} {...article} />
        ))}
    </SimpleGrid>
);

export const Listing: FC<Props> = ({ articles }) => {
    const defaultPage = 1;
    const [page, setPage] = useState<number>(defaultPage);
    const pageSize = 4;
    const offset = (page - 1) * pageSize;
    const _articles = articles.slice(offset, offset + pageSize);

    const Paginator = () => (
        <Pagination
            defaultCurrent={defaultPage}
            current={page}
            pageSize={pageSize}
            total={articles.length}
            paginationProps={{
                display: 'flex',
            }}
            baseStyles={{
                lineHeight: '1em',
                fontWeight: '400',
                borderWidth: '2px',
                bgColor: 'gray.50',
            }}
            activeStyles={{
                bgColor: 'purple.400',
                color: 'gray.50',
                lineHeight: '1em',
                borderWidth: '2px',
                borderColor: 'purple.400',
            }}
            hoverStyles={{
                borderColor: 'purple.400',
                lineHeight: '1em',
                borderWidth: '2px',
            }}
            onChange={(p) => p && setPage(p)}
        />
    );

    return (
        <>
            <Paginator />
            <Articles articles={_articles} />
            <Paginator />
        </>
    );
};
