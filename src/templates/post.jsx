import React from 'react';
import { graphql, Link as GLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  VStack,
  HStack,
  Container,
  Heading,
  Text,
  Tag,
  Divider,
  Link,
  OrderedList,
  UnorderedList,
  ListItem,
  Flex,
  Code,
  Icon,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/Layout';
import Comments from '../components/Comments';

export const query = graphql`
  query BlogPost($slug: String, $previous: String, $next: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      excerpt {
        childMarkdownRemark {
          excerpt(pruneLength: 5000)
        }
      }
      createdAt(formatString: "MMM D YY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            gatsbyImageData
          }
          ... on ContentfulBlogPost {
            contentful_id
            __typename
            title
            slug
            featuredImage {
              title
              gatsbyImageData(aspectRatio: 1, width: 40)
            }
          }
        }
      }
      featuredImage {
        title
        gatsbyImageData(aspectRatio: 1.69)
      }
      tag {
        backgroundColor
        id
        textColor
        name
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previous }) {
      id
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $next }) {
      id
      slug
      title
    }
  }
`;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Text>{text}</Text>,
    [MARKS.CODE]: (text) => <Code>{text}</Code>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <Heading as="h2" size="xl">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Heading as="h2" size="lg">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Heading as="h3" size="md">
        {children}
      </Heading>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.QUOTE]: (node, children) => (
      <Flex w="full">
        <Flex bgColor="gray.100" flex="0 0 0.25rem" mr="1rem" />
        <Text as="cite">{children}</Text>
      </Flex>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <UnorderedList px="1rem">{children}</UnorderedList>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <OrderedList px="1rem">{children}</OrderedList>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <ListItem px="0.5rem">{children}</ListItem>
    ),
    [BLOCKS.HR]: () => <Divider />,
    [BLOCKS.EMBEDDED_ENTRY]: (node) => (
      <BlogSmallCard
        title={node.data.target.title}
        featuredImage={node.data.target.featuredImage}
        slug={node.data.target.slug}
      />
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <GatsbyImage
        image={node.data.target.gatsbyImageData}
        alt={node.data.target.title}
        className="shadow hover-shadow"
      />
    ),
    [INLINES.EMBEDDED_ENTRY]: (node) => (
      <Link as={GLink} to={`/blog/${node.data.target.slug}`}>
        {node.data.target.title}
      </Link>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri} isExternal>
        {children} <ExternalLinkIcon borderRadius={0} />
      </Link>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node, children) => (
      <Link as={GLink} to={`/blog/${node.data.target.slug}`}>
        {children}
      </Link>
    ),
  },
};

const BlogPost = ({ data }) => {
  const { contentfulBlogPost, previous, next } = data;
  const bodyRichText = contentfulBlogPost.body;

  return (
    <Layout title={contentfulBlogPost.title}>
      <Container maxW="container.sm">
        <VStack w="full" spacing="2rem" py="2rem" alignItems="flex-start">
          <Heading>{contentfulBlogPost.title}</Heading>
          <PostBreadCrumb title={contentfulBlogPost.title} />
          <HStack w="full" justify="space-between">
            <HStack>
              {contentfulBlogPost.tag.map((tag) => (
                <Tag
                  key={tag.name}
                  bgColor={tag.backgroundColor}
                  textColor={tag.textColor}
                >
                  {tag.name}
                </Tag>
              ))}
            </HStack>
            <Text>{contentfulBlogPost.updatedAt}</Text>
          </HStack>
          <Text>{contentfulBlogPost.excerpt.childMarkdownRemark.excerpt}</Text>
          <GatsbyImage
            image={contentfulBlogPost.featuredImage.gatsbyImageData}
            alt={contentfulBlogPost.featuredImage.title}
          />
          <VStack alignItems="flex-start" spacing="1.5rem">
            {bodyRichText && renderRichText(bodyRichText, options)}
          </VStack>
          <Divider />
          <VStack w="100%" spacing="1rem">
            {previous && (
              <PrevNext
                slug={previous.slug}
                title={previous.title}
                icon={FaArrowLeft}
                direction="row"
                textAlign="left"
              />
            )}
            {next && (
              <PrevNext
                slug={next.slug}
                title={next.title}
                icon={FaArrowRight}
                direction="row-reverse"
                textAlign="right"
              />
            )}
          </VStack>
        </VStack>
        <Divider />
        <Comments />
      </Container>
    </Layout>
  );
};

const PostBreadCrumb = ({ title }) => (
  <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink as={GLink} to="/">
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink as={GLink} to="/blog">
        Blog
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink>{title}</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

const BlogSmallCard = ({ title, featuredImage, slug }) => (
  <LinkBox as={Flex}>
    <HStack className="shadow hover-shadow" p="1rem" spacing="1rem">
      <GatsbyImage
        image={featuredImage.gatsbyImageData}
        alt={featuredImage.title}
      />
      <Heading as="h3" size="sm">
        <LinkOverlay as={GLink} to={`/blog/${slug}`} />
        {title}
      </Heading>
    </HStack>
  </LinkBox>
);

const PrevNext = ({ slug, title, icon, direction, textAlign }) => (
  <LinkBox w="100%">
    <Stack
      justify="flex-start"
      alignItems="center"
      direction={direction}
      p="1rem"
      spacing="1rem"
      className="shadow hover-shadow"
    >
      <Icon as={icon} />
      <Heading as="h3" size="sm" textAlign={textAlign}>
        <LinkOverlay as={GLink} to={`/blog/${slug}`} />
        {title}
      </Heading>
    </Stack>
  </LinkBox>
);

export default BlogPost;
