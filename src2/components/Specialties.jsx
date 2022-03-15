import React from 'react';
import { VStack, Wrap, WrapItem, Text, Icon } from '@chakra-ui/react';

import {
  FaChartLine,
  FaCode,
  FaFingerprint,
  FaShoppingCart,
} from 'react-icons/fa';

const Specialties = () => {
  const data = [
    {
      icon: FaChartLine,
      text: 'Data Analytics',
      color: 'red.400',
    },
    {
      icon: FaCode,
      text: 'Data Engineering',
      color: 'gray.600',
    },
    {
      icon: FaFingerprint,
      text: 'Digital Tracking',
      color: 'orange.400',
    },
    {
      icon: FaShoppingCart,
      text: 'Growth Marketing',
      color: 'green.400',
    },
  ];

  return (
    <Wrap spacing="2rem" w="100%" justify="space-between">
      {data.map((field) => (
        <WrapItem
          key={field.text}
          flex={{ base: '1 0 calc(50% - 2rem)', md: '1 0 calc(25% - 2rem)' }}
        >
          <Specialty
            key={field.text}
            icon={field.icon}
            text={field.text}
            color={field.color}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
};

const Specialty = ({ text, icon, color }) => (
  <VStack flex="1 0 100%" className="shadow hover-shadow" p="1rem">
    <Icon as={icon} fontSize="4rem" color={color} />
    <Text>{text}</Text>
  </VStack>
);

export default Specialties;
