require('dotenv').config();

const { githubAPIQuery } = require('./src/api/github');

const GTM_ENV = process.env.NODE_ENV === 'prod' ? 'env-1' :'env-2';

module.exports = {
  siteMetadata: {
    title: 'hieumdd',
    description: 'My Personal Portfolio in React, used for testing & show my skills on the Web',
    author: 'hieumdd',
    keywords: `python, javascript, digital analytics, tracking, data engineering`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: '@chakra-ui/gatsby-plugin',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `gcrbu9n9lrxi`,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        url: 'https://api.github.com/graphql',
        token: process.env.GH_TOKEN,
        graphQLQuery: githubAPIQuery,
        variables: {
          github_login: process.env.GH_LOGIN,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WVHZ39P",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
        gtmAuth: process.env.GTM_AUTH,
        gtmPreview: GTM_ENV,
        enableWebVitalsTracking: true,
      },
    },
  ],
  flags: {
    THE_FLAG: false
  }
};
