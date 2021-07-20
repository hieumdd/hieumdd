import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';

const Section = ({ id, heading, children }) => (
  <VStack id={id} spacing={{ base: 10, md: 20 }} w="100%" py='2rem' alignItems="flex-start">
    {heading ? <Heading as="h3">{heading}</Heading> : undefined}
    {children}
  </VStack>
);

export default Section;
