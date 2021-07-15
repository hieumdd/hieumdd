import React from 'react';
import { graphql, Link as gLink } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
  HStack,
  Container,
  Heading,
  Text,
  Tag,
  Divider,
} from '@chakra-ui/react';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/Layout';
import Comments from '../components/Comments';

export const query = graphql`
  query BlogPost($slug: String) {
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
            gatsbyImageData
          }
        }
      }
      featuredImage {
        gatsbyImageData(aspectRatio: 1.69)
      }
      tag {
        backgroundColor
        id
        textColor
        name
      }
    }
  }
`;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Text>{text}</Text>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <Heading as="h2" size="xl">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Heading as="h3" size="lg">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Heading as="h4" size="md">
        {children}
      </Heading>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const image = getImage(node.data.target); // eslint-disable-line
      return (
        <GatsbyImage
          image={image}
          alt={node.data.target.description} // eslint-disable-line
          className="shadow hover-shadow"
        />
      );
    },
  },
};

const BlogPost = ({ data }) => {
  const bodyRichText = data.contentfulBlogPost.body;
  return (
    <Layout title={data.contentfulBlogPost.title}>
      <Container maxW="container.sm">
        <VStack w="full" spacing={5} alignItems="flex-start">
          <Heading>{data.contentfulBlogPost.title}</Heading>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={gLink} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={gLink} to="/blog">
                Blog
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{data.contentfulBlogPost.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HStack w="full" justify="space-between">
            <HStack>
              {data.contentfulBlogPost.tag.map((tag) => (
                <Tag
                  key={tag.name}
                  bgColor={tag.backgroundColor}
                  textColor={tag.textColor}
                >
                  {tag.name}
                </Tag>
              ))}
            </HStack>
            <Text>{data.contentfulBlogPost.createdAt}</Text>
          </HStack>
          <Text>
            {data.contentfulBlogPost.excerpt.childMarkdownRemark.excerpt}
          </Text>
          <GatsbyImage
            image={data.contentfulBlogPost.featuredImage.gatsbyImageData}
            objectFit="cover"
            objectPosition="50% 50%"
          />
          <VStack alignItems="flex-start" spacing="1.5rem">
            {bodyRichText && renderRichText(bodyRichText, options)}
          </VStack>
          <Divider/>
          <Comments/>
        </VStack>
      </Container>
    </Layout>
  );
};

export default BlogPost;
