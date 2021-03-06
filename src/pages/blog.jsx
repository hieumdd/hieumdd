import React, { useState, useEffect } from 'react';
import { Link as GLink, graphql, useStaticQuery } from 'gatsby';
import {
  VStack,
  HStack,
  Flex,
  Wrap,
  WrapItem,
  Button,
  LinkOverlay,
  LinkBox,
  Text,
  Heading,
  Tag,
} from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Section from '../components/Section';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query Blog {
      allContentfulBlogPost(sort: { fields: updatedAt, order: DESC }) {
        nodes {
          updatedAt(formatString: "MMM D YY")
          featuredImage {
            gatsbyImageData(aspectRatio: 1.69, height: 400)
          }
          id
          slug
          title
          tag {
            backgroundColor
            name
            textColor
          }
          excerpt {
            childMarkdownRemark {
              excerpt(pruneLength: 150)
            }
          }
        }
      }
    }
  `);

  return (
    <Layout title="Blog">
      <PostsSection data={data} />
    </Layout>
  );
};

const PostsSection = ({ data }) => {
  const allContentfulBlogPost = data.allContentfulBlogPost.nodes;

  const All = {
    name: 'All',
    backgroundColor: 'white',
    textColor: 'black',
  };
  const allTags = allContentfulBlogPost
    .map((node) => node.tag)
    .flat(2)
    .map((node) => JSON.stringify(node));
  const uniqueTags = [...new Set(allTags)];
  const tags = [All, ...uniqueTags.map((node) => JSON.parse(node))];

  const per = 4;

  const [list, setList] = useState([...allContentfulBlogPost.slice(0, per)]);
  const [selectedTag, setTag] = useState(All);
  const [count, setCount] = useState(per);
  const [hasMore, setHasMore] = useState(allContentfulBlogPost.length > per);

  const handleCount = () => {
    setCount(count + per);
  };

  const handleTag = (tag) => {
    setTag(tag);
  };

  useEffect(() => {
    if (selectedTag.name === 'All') {
      setList([...allContentfulBlogPost.slice(0, count)]);
    } else {
      setList([
        ...allContentfulBlogPost
          .filter((node) =>
            node.tag.some((item) =>
              JSON.stringify(item).includes(JSON.stringify(selectedTag))
            )
          )
          .slice(0, count),
      ]);
    }
    if (count > allContentfulBlogPost.length) {
      setHasMore(false);
    }
  }, [selectedTag, count, hasMore]);

  return (
    <Section heading="Blog">
      <Wrap spacing="1rem" shouldWrapChildren>
        {tags.map((tag) => (
          <Button
            key={tag.name}
            className="shadow hover-shadow"
            px="1rem"
            py="0.5rem"
            bgColor={tag.backgroundColor}
            textColor={tag.textColor}
            onClick={() => handleTag(tag)}
            _hover={{ bg: tag.textColor, color: tag.backgroundColor }}
          >
            {tag.name}
          </Button>
        ))}
      </Wrap>
      <Posts data={list} />
      <Button
        w="100%"
        colorScheme="blue"
        onClick={handleCount}
        display={hasMore ? 'block' : 'none'}
      >
        Load more
      </Button>
    </Section>
  );
};

const Posts = ({ data }) => (
  <Wrap spacing="2rem" justify="space-between">
    {data.map((node) => (
      <WrapItem
        key={node.id}
        flex={{ base: '0 0 calc(100% - 2rem)', md: '0 0 calc(50% - 2rem)' }}
      >
        <Post
          key={node.id}
          title={node.title}
          excerpt={node.excerpt}
          featuredImage={node.featuredImage.gatsbyImageData}
          updatedAt={node.updatedAt}
          slug={node.slug}
          tags={node.tag}
        />
      </WrapItem>
    ))}
  </Wrap>
);

const Post = ({ title, excerpt, updatedAt, featuredImage, slug, tags }) => (
  <LinkBox as={Flex}>
    <VStack className="shadow hover-shadow" p="1rem" spacing="1rem">
      <GatsbyImage image={featuredImage} />
      <VStack alignItems="flex-start" spacing="0.75rem">
        <HStack w="full" justify="space-between">
          <HStack>
            {tags.map((tag) => (
              <Tag
                key={tag.name}
                bgColor={tag.backgroundColor}
                textColor={tag.textColor}
              >
                {tag.name}
              </Tag>
            ))}
          </HStack>
          <Text>{updatedAt}</Text>
        </HStack>
        <LinkOverlay as={GLink} to={`/blog/${slug}`} />
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text w="full">{excerpt.childMarkdownRemark.excerpt}</Text>
      </VStack>
    </VStack>
  </LinkBox>
);

export default Blog;
