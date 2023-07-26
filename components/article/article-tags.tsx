import { Wrap, WrapItem, Tag } from '@chakra-ui/react';

import { MDXFile } from '../../services/mdx.service';

export const ArticleTags = ({ tags }: MDXFile['frontMatter']) => {
    return (
        <Wrap>
            {tags.map((tag, i) => (
                <WrapItem key={i}>
                    <Tag>{tag}</Tag>
                </WrapItem>
            ))}
        </Wrap>
    );
};
