import { FC } from 'react';
import NextLink from 'next/link';
import { VStack, LinkBox, LinkOverlay, Text, Heading } from '@chakra-ui/react';

import Image from '../@chakra/Image';
import Time from './Time';
import Tags from './Tags';
import { MDXFile } from '../../lib/mdx';

const Card: FC<MDXFile> = ({ frontMatter }) => {
    const { path, title, cover, summary } = frontMatter;
    return (
        <LinkBox className="hover-color" as="article" borderWidth="2px">
            <NextLink href={path} passHref>
                <LinkOverlay>
                    <VStack
                        spacing="1em"
                        p="1em"
                        align="flex-start"
                        alignItems="stretch"
                        role="group"
                    >
                        <Time {...frontMatter} />
                        <Image src={cover} alt="title" ratio={2 / 1} />
                        <Heading as="h2" size="md">
                            {title}
                        </Heading>
                        <Text>{summary}</Text>
                        <Tags {...frontMatter} />
                    </VStack>
                </LinkOverlay>
            </NextLink>
        </LinkBox>
    );
};

export default Card;
