import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Helmet } from 'react-helmet';

import favicon from '../static/icons/profile_nord.svg';

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  );

  const keywords = site.siteMetadata.keywords; // eslint-disable-line
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    >
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default SEO;
