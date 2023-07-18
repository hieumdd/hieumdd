import NextLink from 'next/link';
import { Code, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react';
import { MDXRemoteProps } from 'next-mdx-remote';

export const components: MDXRemoteProps['components'] = {
    h2: (props) => <Heading as="h2" size="lg" {...props} />,
    h3: (props) => <Heading as="h3" size="md" {...props} />,
    a: ({ href, children }) => {
        return (
            <NextLink href={href as string} passHref>
                <Link>{children}</Link>
            </NextLink>
        );
    },
    p: (props) => <Text {...props} />,
    ul: (props) => <UnorderedList {...props} />,
    ol: (props) => <OrderedList {...props} />,
    li: (props) => <ListItem ml="1em" {...props} />,
    code: (props) => <Code flexGrow={1} {...props} />,
};
