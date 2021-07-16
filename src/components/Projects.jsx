import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  Box,
  Wrap,
  WrapItem,
  LinkBox,
  LinkOverlay,
  HStack,
  Text,
  Tag,
} from '@chakra-ui/react';

const Projects = () => {
  const { allGithubData } = useStaticQuery(graphql`
    query Index {
      allGithubData {
        nodes {
          data {
            user {
              repositories {
                nodes {
                  name
                  primaryLanguage {
                    name
                    color
                  }
                  updatedAt(fromNow: true)
                  url
                  id
                }
              }
            }
          }
        }
      }
    }
  `);

  const reposData = allGithubData.nodes[0].data.user.repositories.nodes;
  return (
    <Wrap spacing="1rem">
      {reposData.map((repo) => (
        <WrapItem
          key={repo.id}
          flex={{ base: '1', md: '1 0 calc(50% - 1rem)' }}
        >
          <Project
            name={repo.name}
            language={repo.primaryLanguage}
            link={repo.url}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
};

const Project = ({ name, language, link }) => (
  <LinkBox flex="1 0 100%">
    <HStack justify="space-between" className="shadow hover-shadow" p="1rem">
      <HStack justify="flex-start" spacing="1rem">
        <Box
          boxSize="2rem"
          borderRadius="full"
          bgColor={language ? language.color : '#333333'}
        />
        <LinkOverlay href={link}>
          <Text maxW={{ base: '10rem', md: '20vw' }} isTruncated>
            {name}
          </Text>
        </LinkOverlay>
      </HStack>
      <Tag color={language ? language.color : '#333333'}>
        {language ? language.name : 'Not Yet'}
      </Tag>
    </HStack>
  </LinkBox>
);

export default Projects;
