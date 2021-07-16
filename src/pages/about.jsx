import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  VStack,
  HStack,
  Stack,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
  Heading,
  Text,
  Tag,
  Icon,
  Collapse,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import SectionLayout from '../components/SectionLayout';
import Layout from '../components/Layout';

import techStacks from '../data/techStacks';

const query = graphql`
  query About {
    file(relativePath: { eq: "images/pesce-huang-rsPLE2DhjwE-unsplash.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1, width: 400)
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(query);
  return (
    <Layout>
      <BioSection data={data} />
      <TechStackSection />
    </Layout>
  );
};

const BioSection = ({ data }) => {
  const tags = [
    { key: 1, value: 'lorem' },
    { key: 2, value: 'lorem' },
    { key: 3, value: 'lorem' },
    { key: 4, value: 'lorem' },
  ];
  return (
    <SectionLayout heading="About me">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '2rem', md: '4rem' }}
        justifyContent="flex-start"
        alignItems="center"
      >
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
        <VStack
          justify="space-between"
          alignItems="flex-start"
          spacing={{ base: '1rem', md: '3.25rem' }}
        >
          <VStack alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="lg">
              Lorem Ipsum
            </Heading>
            <Text witdh="100%" textAlign={{ base: 'center', md: 'start' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </VStack>
          <HStack width="100%" justify={{ base: 'center', md: 'flex-start' }}>
            {tags.map((tag) => (
              <Tag key={tag.key}>{tag.value}</Tag>
            ))}
          </HStack>
        </VStack>
      </Stack>
    </SectionLayout>
  );
};

const TechStackSection = () => (
  <SectionLayout heading="Tech Stack">
    <Grid
      templateColumns={{ base: '1fr', md: '2.5fr 6fr' }}
      gap={{ base: 10, md: 10 }}
      maxW="100%"
    >
      {techStacks.map((techStack) => (
        <TechRow key={techStack.name} techStack={techStack} />
      ))}
    </Grid>
  </SectionLayout>
);

const TechRow = ({ techStack }) => (
  <>
    <GridItem>
      <TechCard icon={techStack.icon} text={techStack.name} mode="header" />
    </GridItem>
    <GridItem>
      <TechDetailsRow techs={techStack.techs} />
    </GridItem>
  </>
);

const TechDetailsRow = ({ techs }) => (
  <Wrap spacing="2rem" justify="flex-start" alignContents="space-between">
    {techs.map((tech) => (
      <WrapItem key={tech.name}>
        <TechCard
          key={tech.name}
          icon={tech.icon}
          text={tech.name}
          textColor={tech.textColor}
          bgColor={tech.bgColor}
          defaultIsOpen
        />
      </WrapItem>
    ))}
  </Wrap>
);

const TechCard = ({ icon, text, textColor, bgColor = 'white', mode }) => {
  const [isMd] = useMediaQuery('(min-width: 48em');
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure({
    defaultIsOpen: isMd,
  });

  const responsiveToggle = isMd ? onOpen : onToggle;

  useEffect(() => {
    if (!isMd) {
      const timer = setTimeout(() => onClose(), 1000);
      return () => {
        clearTimeout(timer);
      };
    }
    return undefined;
  }, [isOpen]);

  return (
    <HStack
      flexGrow={{ base: 1, md: 0 }}
      className="shadow hover-shadow"
      px="1rem"
      py="0.5rem"
      spacing="1rem"
      justify="flex-start"
      alignItems="center"
      textColor={textColor}
      bgColor={bgColor}
      onClick={responsiveToggle}
    >
      <Icon as={icon} boxSize={6} />
      {mode === 'header' ? (
        <TechCardHeader text={text} />
      ) : (
        <TechCardCollaspe isOpen={isOpen} text={text} />
      )}
    </HStack>
  );
};

const TechCardHeader = ({ text }) => <Text>{text}</Text>;

const TechCardCollaspe = ({ isOpen, text }) => (
  <Collapse in={isOpen} animateOpacity>
    <Text>{text}</Text>
  </Collapse>
);

export default About;
