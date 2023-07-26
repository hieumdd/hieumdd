import { Flex, Text } from '@chakra-ui/react';

import { MDXFile } from '../../services/mdx.service';

export const ArticleReadingTime = ({ updatedAt, readingTime }: MDXFile['frontMatter']) => {
    return (
        <Flex justify="space-between">
            <Text>{updatedAt}</Text>
            <Text>{Math.round(readingTime.minutes)} mins</Text>
        </Flex>
    );
};
