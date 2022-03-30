import NextLink from 'next/link';
import {
    Box,
    Heading,
    OrderedList,
    UnorderedList,
    ListItem,
    Text,
    Link,
    Code,
    Divider,
} from '@chakra-ui/react';

type MDXComponent = (props: any) => JSX.Element;

type MDXComponents = {
    [key: string]: MDXComponent;
};

const CustomLink: MDXComponent = ({ href }) => {
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <NextLink href={href} passHref>
                <Link />
            </NextLink>
        );
    }

    return <Link isExternal />;
};

const Hr = () => <Divider w="100%" />;

const components: MDXComponents = {
    h2: (props) => <Heading as="h2" size="lg" {...props} />,
    h3: (props) => <Heading as="h3" size="md" {...props} />,
    a: CustomLink,
    p: (props) => <Text {...props} />,
    ul: (props) => <UnorderedList {...props} />,
    ol: (props) => <OrderedList {...props} />,
    li: (props) => <ListItem ml="1em" {...props} />,
    pre: (props) => <Box as="pre" whiteSpace="pre-wrap" {...props} />,
    code: (props) => <Code {...props} />,
};

export { CustomLink };
export default components;
