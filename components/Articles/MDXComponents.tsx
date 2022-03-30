import { FC } from 'react';
import NextLink from 'next/link';
import { Box, Code, Heading, Link, Text, Divider } from '@chakra-ui/react';

const CustomLink: FC<{ href: string }> = ({ href }) => {
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

const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size="xl" {...props} />,
    h2: (props: any) => (
        <Heading as="h2" size="lg" fontWeight="bold" {...props} />
    ),
    h3: (props: any) => (
        <Heading as="h3" size="md" fontWeight="bold" {...props} />
    ),
    a: CustomLink,
    p: (props: any) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
    ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
    ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
    li: (props: any) => <Box as="li" pb={1} {...props} />,
};

export { CustomLink };
export default MDXComponents;
