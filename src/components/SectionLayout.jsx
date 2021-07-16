import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';

const SectionLayout = ({ heading, children }) => (
  <VStack spacing={{ base: 10, md: 20 }} width="100%" alignItems="flex-start">
    {heading ? (
      <Heading as="h3" alignSelf="flex-start">
        {heading}
      </Heading>
    ) : undefined}
    {children}
  </VStack>
);

export default SectionLayout;
