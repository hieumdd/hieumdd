import React from 'react';
import {
  Wrap,
  WrapItem,
  HStack,
  Box,
  Icon,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Section from '../components/Section';
import socials from '../data/socials';

const Contacts = () => {
  const data = useStaticQuery(graphql`
    query Contacts {
      file(relativePath: { eq: "images/contact.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 2.5)
        }
      }
    }
  `);

  return (
    <Layout title="Contact">
      <Section heading="Contacts">
        <GatsbyImage
          loading="eager"
          image={data.file.childImageSharp.gatsbyImageData}
        />
        <Wrap w="100%" spacing="2rem">
          {socials.map((socialItem) => (
            <WrapItem
              key={socialItem.id}
              flex={{ base: '1', md: '1' }}
            >
              <SocialCard
                key={socialItem.id}
                icon={socialItem.icon}
                link={socialItem.link}
                text={socialItem.text}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Section>
    </Layout>
  );
};

const SocialCard = ({ icon, link, text }) => (
  <LinkBox w="100%" className="shadow hover-shadow">
    <HStack p="1rem" justify="flex-start" spacing="1rem">
      <Box>
        <Icon fontSize="1.5rem" as={icon} />
      </Box>
      <LinkOverlay href={link}>{text}</LinkOverlay>
    </HStack>
  </LinkBox>
);

export default Contacts;
