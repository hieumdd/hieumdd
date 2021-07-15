import React from 'react';
import { HStack, Icon, Text } from '@chakra-ui/layout';

const TechCards = ({icon, text}) => (
    <HStack className="shadow" p="0.5rem" spacing={2}>
      <Icon as={icon} boxSize={8} />
      <Text>{text}</Text>
    </HStack>
  );
 export default TechCards
