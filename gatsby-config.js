require('dotenv').config();

const { githubAPIQuery } = require('./src/api/github');

const GTM_ENV = process.env.NODE_ENV === 'prod' ? 'env-1' : 'env-2';

module.exports = {
  siteMetadata: {
    title: 'hieumdd',
    description:
      'My Personal Portfolio in React, used for testing & show my skills on the Web',
    author: 'hieumdd',
    keywords: `python, javascript, digital analytics, tracking, data engineering`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [480, 768, 992, 1280, 1536],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
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
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WVHZ39P',
        includeInDevelopment: true,
        defaultDataLayer: { platform: 'gatsby' },
        gtmAuth: process.env.GTM_AUTH,
        gtmPreview: GTM_ENV,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'hieumdd Porfolio',
        short_name: 'HM',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#4299e1',
        display: 'standalone',
        icon: 'src/static/icons/profile_nord.svg',
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
  ],
  flags: {
    THE_FLAG: false,
  },
};
