import { Children, ReactElement } from 'react';
import NextLink from 'next/link';
import {
    Code,
    Heading,
    Link,
    ListItem,
    OrderedList,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import { MDXRemoteProps } from 'next-mdx-remote';

export const components: MDXRemoteProps['components'] = {
    a: ({ href, children }) => {
        return (
            <Link as={NextLink} href={href as string}>
                {children}
            </Link>
        );
    },
    code: (props) => <Code w={props.className ? 'full' : ''} {...props} />,
    h2: (props) => <Heading as="h2" size="lg" {...props} />,
    h3: (props) => <Heading as="h3" size="md" {...props} />,
    li: (props) => <ListItem {...props} />,
    ol: (props) => <OrderedList {...props} />,
    p: (props) => <Text {...props} />,
    ul: (props) => <UnorderedList {...props} />,
    table: (props) => <Table {...props} />,
    thead: (props) => <Thead {...props} />,
    tbody: (props) => <Tbody {...props} />,
    tr: (props) => <Tr {...props} />,
    th: (props) => <Th {...props} />,
    td: (props) => <Td {...props} />,
};
