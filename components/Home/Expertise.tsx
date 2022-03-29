import {
    VStack,
    HStack,
    Wrap,
    WrapItem,
    SimpleGrid,
    Text,
    Icon,
    Tag,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaChartLine, FaCode, FaFingerprint, FaCog } from 'react-icons/fa';

export type ExpertiseProps = {
    title: string;
    description: string;
    icon: IconType;
    tools: string[];
};

const expertises: ExpertiseProps[] = [
    {
        title: 'Data Engineering',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo a velit ac malesuada. Morbi euismod urna eu urna euismod tincidunt.',
        icon: FaCode,
        tools: ['Google Cloud Platform', 'Python', 'TypeScript', 'Docker'],
    },
    {
        title: 'Data Analytics',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo a velit ac malesuada. Morbi euismod urna eu urna euismod tincidunt.',
        icon: FaChartLine,
        tools: ['BigQuery', 'SQL', 'Data Studio', 'Power BI'],
    },
    {
        title: 'Digital Tracking & Analytics',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo a velit ac malesuada. Morbi euismod urna eu urna euismod tincidunt.',
        icon: FaFingerprint,
        tools: ['Google Tag Manager', 'Google Analytics'],
    },
    {
        title: 'Integration & Automation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo a velit ac malesuada. Morbi euismod urna eu urna euismod tincidunt.',
        icon: FaCog,
        tools: ['NetSuite SuiteScript', 'AppScript'],
    },
];

const ExpertiseCard = ({ title, description, icon, tools }: ExpertiseProps) => (
    <VStack
        className="hover-color"
        p="1rem"
        align="flex-start"
        spacing="1em"
        borderWidth="2px"
        role="group"
    >
        <HStack
            className="hover-color"
            fontSize="1.5em"
            align="flex-start"
            lineHeight="1em"
            spacing="1em"
        >
            <Icon as={icon} />
            <Text fontWeight="bold">{title}</Text>
        </HStack>
        <Text>{description}</Text>
        <Wrap>
            {tools.map((tool, i) => (
                <WrapItem key={i}>
                    <Tag className="hover-color" variant="outline">
                        {tool}
                    </Tag>
                </WrapItem>
            ))}
        </Wrap>
    </VStack>
);

const Expertise = () => (
    <SimpleGrid columns={2} spacing="2em">
        {expertises.map((props, i) => (
            <ExpertiseCard key={i} {...props} />
        ))}
    </SimpleGrid>
);

export default Expertise;
