import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { MDXFile } from '@/lib/mdx';

type TimeProps = Pick<MDXFile['frontMatter'], 'updatedAt' | 'readingTime'>;

const Time: FC<TimeProps> = ({ updatedAt, readingTime }) => (
    <Flex justify="space-between">
        <Text>{updatedAt}</Text>
        <Text>{Math.round(readingTime.minutes)} mins</Text>
    </Flex>
);
export default Time;
