import {
    VStack,
    HStack,
    Stack,
    Wrap,
    WrapItem,
    Text,
    Icon,
} from '@chakra-ui/react';

import { IconType } from 'react-icons';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import { FiGitMerge } from 'react-icons/fi';
import {
    FaCode,
    FaFacebook,
    FaShoppingCart,
    FaCloud,
    FaGithub,
    FaDocker,
} from 'react-icons/fa';
import {
    SiPython,
    SiTypescript,
    SiGoogleads,
    SiGoogleanalytics,
    SiGoogletagmanager,
} from 'react-icons/si';

type Tech = {
    name: string;
    icon: IconType;
};

type TechProps = Tech & {
    textColor: string;
    bgColor: string;
};

type TechCardProps = TechProps & {
    flex: string;
};

type TechStackProps = Partial<Tech> & {
    name: string;
    icon: IconType;
    stack: TechProps[];
};

const techStack: TechStackProps[] = [
    {
        name: 'Coding',
        icon: FaCode,
        stack: [
            {
                name: 'Python',
                icon: SiPython,
                textColor: 'white',
                bgColor: 'blue.600',
            },
            {
                name: 'TypeScript',
                icon: SiTypescript,
                textColor: 'white',
                bgColor: 'blue.600',
            },
        ],
    },
    {
        name: 'Digital Analytics',
        icon: FaShoppingCart,
        stack: [
            {
                name: 'Google Analytics',
                icon: SiGoogleanalytics,
                textColor: 'white',
                bgColor: 'orange.400',
            },
            {
                name: 'Google Tag Manager',
                icon: SiGoogletagmanager,
                textColor: 'white',
                bgColor: 'blue.300',
            },
            {
                name: 'Google Ads',
                icon: SiGoogleads,
                textColor: 'white',
                bgColor: 'red.500',
            },
            {
                name: 'Facebook Ads',
                icon: FaFacebook,
                textColor: 'white',
                bgColor: 'blue.700',
            },
        ],
    },
    {
        name: 'Cloud Platform',
        icon: FaCloud,
        stack: [
            {
                name: 'Google Cloud',
                icon: DiGoogleCloudPlatform,
                textColor: 'white',
                bgColor: 'blue.400',
            },
        ],
    },
    {
        name: 'DevOps',
        icon: FiGitMerge,
        stack: [
            {
                name: 'Github',
                icon: FaGithub,
                textColor: 'white',
                bgColor: 'black',
            },
            {
                name: 'Docker',
                icon: FaDocker,
                textColor: 'white',
                bgColor: 'blue.400',
            },
        ],
    },
];

const TechCard = ({
    flex,
    icon,
    name,
    textColor = 'black',
    bgColor = 'white',
}: TechCardProps) => {
    return (
        <HStack
            flex={flex}
            className="shadow hover-shadow"
            px="1em"
            py="0.5em"
            spacing="1rem"
            alignItems="center"
            textColor={textColor}
            bgColor={bgColor}
        >
            <Icon as={icon} boxSize="1em" />
            <Text>{name}</Text>
        </HStack>
    );
};

const TechRow = ({ icon, name, stack }: TechStackProps) => (
    <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing="2rem"
        alignItems="flex-start"
    >
        <TechCard
            icon={icon}
            name={name}
            textColor="black"
            bgColor="white"
            flex="0 0 calc(40% - 2em)"
        />
        <Wrap spacing="2rem" justify="flex-start">
            {stack.map((tech) => (
                <WrapItem key={tech.name}>
                    <TechCard
                        key={tech.name}
                        icon={tech.icon}
                        name={tech.name}
                        textColor={tech.textColor}
                        bgColor={tech.bgColor}
                        flex="1 0"
                    />
                </WrapItem>
            ))}
        </Wrap>
    </Stack>
);

const TechStacks = () => (
    <VStack w="100%" alignItems="space-between" spacing="2rem">
        {techStack.map((stack) => (
            <TechRow
                key={stack.name}
                icon={stack.icon}
                name={stack.name}
                stack={stack.stack}
            />
        ))}
    </VStack>
);

export default TechStacks;
