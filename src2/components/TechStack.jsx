import React, { useEffect } from 'react';

import {
  VStack,
  HStack,
  Stack,
  Wrap,
  WrapItem,
  Text,
  Icon,
  Collapse,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';

import techStacks from '../data/techStacks';

const TechStack = () => (
  <VStack w="100%" alignItems="space-between" spacing="2rem">
    {techStacks.map((techStack) => (
      <TechRow key={techStack.name} techStack={techStack} />
    ))}
  </VStack>
);

const TechRow = ({ techStack }) => (
  <Stack
    direction={{ base: 'column', md: 'row' }}
    spacing="2rem"
    alignItems="flex-start"
  >
    <TechCard
      icon={techStack.icon}
      text={techStack.name}
      mode="header"
      flex={{ base: '1 0 100%', md: '1' }}
    />
    <TechDetailsRow techs={techStack.techs} flex={{ base: '1', md: '3' }} />
  </Stack>
);

const TechDetailsRow = ({ techs, ...props }) => (
  <Wrap spacing="2rem" justify="flex-start" flex={props.flex}>
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

const TechCard = ({
  icon,
  text,
  textColor,
  bgColor = 'white',
  mode,
  ...props
}) => {
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
      flex={props.flex}
        w='full'
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

export default TechStack;
