const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
          previous {
            id
            slug
          }
          next {
            id
            slug
          }
        }
      }
    }
  `);
  response.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve('./src/templates/post.jsx'),
      context: {
        slug: edge.node.slug,
        previous: edge.previous ? edge.previous.slug : null,
        next: edge.next ? edge.next.slug : null,
      },
    });
  });
};
