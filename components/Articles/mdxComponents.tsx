import NextLink from 'next/link';
import {
    Flex,
    Heading,
    OrderedList,
    UnorderedList,
    ListItem,
    Text,
    Link,
    Code,
    Divider,
    Icon,
} from '@chakra-ui/react';
import { HiExternalLink } from 'react-icons/hi';

type MDXComponent = (props: any) => JSX.Element;

type MDXComponents = {
    [key: string]: MDXComponent;
};

const CustomLink: MDXComponent = ({ href, children }) => {
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <NextLink href={href} passHref>
                <Link children={children} />
            </NextLink>
        );
    }

    return (
        <Link isExternal as="span">
            {children}
            <Icon as={HiExternalLink} verticalAlign="text-top" />
        </Link>
    );
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
    pre: (props) => (
        <Flex as="pre" whiteSpace="pre-wrap" alignItems="stretch" {...props} />
    ),
    code: (props) => <Code flex flexGrow={1} {...props} />,
};

export { CustomLink };
export default components;
