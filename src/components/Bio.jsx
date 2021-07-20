import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { VStack, HStack, Stack, Heading, Text, Tag } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query About {
      file(
        relativePath: { eq: "images/coffee.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1, width: 400)
        }
      }
    }
  `);

  const tags = [
    { key: 1, value: 'lorem' },
    { key: 2, value: 'lorem' },
    { key: 3, value: 'lorem' },
    { key: 4, value: 'lorem' },
  ];
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: '2rem', md: '4rem' }}
      justifyContent="flex-start"
      alignItems="center"
    >
      <GatsbyImage
        loading="eager"
        image={data.file.childImageSharp.gatsbyImageData}
      />
      <VStack
        justify="space-between"
        alignItems="flex-start"
        spacing={{ base: '1rem', md: '3.25rem' }}
      >
        <VStack alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading as="h2" size="lg">
            Lorem Ipsum
          </Heading>
          <Text witdh="100%" textAlign={{ base: 'center', md: 'start' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </VStack>
        <HStack width="100%" justify={{ base: 'center', md: 'flex-start' }}>
          {tags.map((tag) => (
            <Tag key={tag.key}>{tag.value}</Tag>
          ))}
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Bio;
