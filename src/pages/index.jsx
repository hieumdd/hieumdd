import React from 'react';
import {
  HStack,
  VStack,
  Stack,
  Heading,
  Text,
  Box,
  Button,
  Divider,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  Wrap,
  WrapItem,
  Tag,
} from '@chakra-ui/react';
import { Link as gLink, graphql, useStaticQuery } from 'gatsby';

import Lottie from 'react-lottie';
import { FaUserCircle, FaStream } from 'react-icons/fa';

import * as analyticsLottie from '../static/lottie/9573-analytics.json';

import Layout from '../components/Layout';
import SectionLayout from '../components/SectionLayout';

const query = graphql`
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
`;

const Index = () => {
  const data = useStaticQuery(query);

  return (
    <Layout title="Home">
      <HeroSection />
      <Divider />
      <FieldsSection />
      <Divider />
      <ProjectsSection data={data} />
    </Layout>
  );
};

const HeroSection = () => (
  <Stack
    align="center"
    direction={{ base: 'column-reverse', md: 'row' }}
    justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
    spacing={['2.5vh', '10vh']}
  >
    <CTA />
    <MainLottie />
  </Stack>
);

const CTA = () => (
  <VStack
    direction="column"
    justify="center"
    align={{ base: 'center', md: 'flex-start' }}
    textAlign={{ base: 'center', md: 'left' }}
    maxW={{ base: 'auto', md: '50%' }}
    spacing={{ base: 5, md: 10 }}
  >
    <Heading as="h2">Hello</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
      imperdiet metus eu finibus. Aliquam auctor arcu sed risus porttitor, quis
      eleifend risus facilisis.
    </Text>
    <HStack spacing={5}>
      <Button
        as={gLink}
        to="/about"
        colorScheme="blue"
        leftIcon={<FaUserCircle />}
      >
        About me
      </Button>
      <Button as={gLink} to="/blog" leftIcon={<FaStream />}>
        Blogs
      </Button>
    </HStack>
  </VStack>
);

const MainLottie = () => {
  const lottieOptions = {
    loop: false,
    autoplay: false,
    animationData: analyticsLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Box
      align={{ base: 'center', md: 'flex-start' }}
      maxW={{ base: '80%', md: '50%' }}
    >
      <Lottie options={lottieOptions} />
    </Box>
  );
};

const FieldsSection = () => (
  <SectionLayout heading="Fields">
    <Fields />
  </SectionLayout>
);

const Fields = () => {
  const fieldsData = [
    {
      id: 'businessIntelligence',
      lottieData: analyticsLottie,
      text: 'A Intelligence',
    },
    {
      id: 'businessIntelligence',
      lottieData: analyticsLottie,
      text: 'A Intelligence',
    },
    {
      id: 'businessIntelligence',
      lottieData: analyticsLottie,
      text: 'A Intelligence',
    },
    {
      id: 'businessIntelligence',
      lottieData: analyticsLottie,
      text: 'A Intelligence',
    },
  ];

  const fields = fieldsData.map((field) => (
    <Field key={field.id} lottie={field.lottieData} text={field.text} />
  ));

  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5}>
      {fields}
    </SimpleGrid>
  );
};

const Field = ({ lottie, text }) => {
  const lottieOptions = {
    loop: false,
    autoplay: false,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LinkBox>
      <VStack textAlign="center" className="shadow hover-shadow" p={5}>
        <Box>
          <Lottie options={lottieOptions} />
        </Box>
        <LinkOverlay href="#">{text}</LinkOverlay>
      </VStack>
    </LinkBox>
  );
};

const ProjectsSection = ({ data }) => (
  <SectionLayout heading="Projects">
    <Projects data={data} />
  </SectionLayout>
);

const Projects = ({ data }) => {
  const reposData = data.allGithubData.nodes[0].data.user.repositories.nodes;
  return (
    <Wrap spacing='1rem'>
      {reposData.map((repo) => (
        <WrapItem key={repo.id} flex={{base: '1', md: '0 1 calc(50% - 2rem)'}}>
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
  <LinkBox width='100%'>
    <HStack justify="space-between" className="shadow hover-shadow" p="1rem">
      <HStack justify="flex-start" spacing={5}>
        <Box
          boxSize={8}
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

export default Index;
