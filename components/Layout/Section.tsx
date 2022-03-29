import { FC, ReactNode } from 'react';
import { Flex, Heading, StackDivider, VStack } from '@chakra-ui/react';

type SectionProps = {
    heading?: string;
    children: ReactNode;
};

export const Section = ({ heading, children }: SectionProps) => (
    <Flex direction="column" gap="2em">
        {heading ? <Heading as="h3">{heading}</Heading> : undefined}
        {children}
    </Flex>
);

export const SectionStack: FC = ({ children }) => (
    <VStack spacing="2em" divider={<StackDivider />}>
        {children}
    </VStack>
);
