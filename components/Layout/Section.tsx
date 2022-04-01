import { FC, ReactNode } from 'react';
import { StackProps, Heading, StackDivider, VStack } from '@chakra-ui/react';

type SectionProps = StackProps & {
    heading?: string;
    children: ReactNode;
};

export const Section = ({ heading, children }: SectionProps) => (
    <VStack as="section" w="100%" align="flex-start" spacing="4em">
        {heading ? <Heading as="h2">{heading}</Heading> : undefined}
        {children}
    </VStack>
);

export const SectionStack: FC<StackProps> = ({ children, ...rest }) => (
    <VStack w="100%" spacing="4em" divider={<StackDivider />} pt={rest.pt || 0}>
        {children}
    </VStack>
);
