import { ReactNode } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

type SectionProps = {
    heading?: string;
    children: ReactNode;
};

const Section = ({ heading, children }: SectionProps) => (
    <Flex direction="column" gap="2em">
        {heading ? <Heading as="h3">{heading}</Heading> : undefined}
        {children}
    </Flex>
);

export default Section;
