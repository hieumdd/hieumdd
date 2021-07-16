import React from 'react';
import {
  SimpleGrid,
  HStack,
  Box,
  Icon,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import SectionLayout from '../components/SectionLayout';
import socials from '../data/socials';

const Contacts = () => {
  const data = useStaticQuery(graphql`
    query Contacts {
      file(
        relativePath: { eq: "images/adam-solomon-WHUDOzd5IYU-unsplash.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 3)
        }
      }
    }
  `);

  return (
    <Layout title="Contact">
      <SectionLayout heading="Contacts">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
        <Social />
      </SectionLayout>
    </Layout>
  );
};

const Social = () => {
  const socialCards = socials.map((socialItem) => (
    <SocialCard
      key={socialItem.id}
      icon={socialItem.icon}
      link={socialItem.link}
      text={socialItem.text}
    />
  ));

  return (
    <SimpleGrid width="100%" columns={{ base: 1, md: 2 }} spacing={5}>
      {socialCards}
    </SimpleGrid>
  );
};

const SocialCard = ({ icon, link, text }) => (
  <LinkBox width="100%" className="shadow hover-shadow">
    <HStack direction="row" p="1rem" justify="flex-start" spacing={5}>
      <Box>
        <Icon boxSize={8} as={icon} />
      </Box>
      <LinkOverlay href={link}>{text}</LinkOverlay>
    </HStack>
  </LinkBox>
);

export default Contacts;
