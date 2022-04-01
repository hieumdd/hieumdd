import { FC } from 'react';
import { Wrap, WrapItem, Tag } from '@chakra-ui/react';

import { MDXFile } from '@/lib/mdx';

type TimeProps = Pick<MDXFile['frontMatter'], 'tags'>;

const Tags: FC<TimeProps> = ({ tags }) => (
    <Wrap>
        {tags.map((tag, i) => (
            <WrapItem key={i}>
                <Tag>{tag}</Tag>
            </WrapItem>
        ))}
    </Wrap>
);
export default Tags;
