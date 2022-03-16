import {
    VStack,
    HStack,
    Wrap,
    WrapItem,
    Text,
    Icon,
} from '@chakra-ui/react';

import { IconType } from 'react-icons';
import {
    FaChartLine,
    FaCode,
    FaFingerprint,
    FaShoppingCart,
    FaFacebook,
    FaGithub,
    FaDocker,
} from 'react-icons/fa';
import {
    SiPython,
    SiTypescript,
    SiGoogleads,
    SiGoogleanalytics,
    SiGoogletagmanager,
    SiGooglecloud,
} from 'react-icons/si';

type ExpertiseProps = {
    text: string;
    color: string;
    icon: IconType;
};

const expertises: ExpertiseProps[] = [
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
        text: 'Ecommerce',
        color: 'green.400',
    },
];

const Expertise = ({ text, icon, color }: ExpertiseProps) => (
    <VStack flex="1 0 100%" className="shadow hover-shadow" p="1rem">
        <Icon as={icon} fontSize="4rem" color={color} />
        <Text>{text}</Text>
    </VStack>
);

const Expertises = () => {
    return (
        <Wrap spacing="2rem" justify="space-between">
            {expertises.map((field) => (
                <WrapItem
                    key={field.text}
                    flex={{
                        base: '1 0 calc(50% - 2rem)',
                        md: '1 0 calc(25% - 2rem)',
                    }}
                >
                    <Expertise
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

type TechProps = {
    name: string;
    icon: IconType;
    textColor: string;
    bgColor: string;
};

const techStacks: TechProps[] = [
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
    {
        name: 'Google Cloud',
        icon: SiGooglecloud,
        textColor: 'white',
        bgColor: 'blue.400',
    },

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
];

const TechStacks = () => (
    <Wrap
        justify={{
            base: 'flex-start',
            md: 'space-between',
        }}
        spacing="1em"
    >
        {techStacks.map((stack) => (
            <WrapItem key={stack.name}>
                <HStack
                    className="shadow hover-shadow"
                    bgColor={stack.bgColor}
                    p="0.75em"
                    lineHeight="100%"
                    textColor={stack.textColor}
                >
                    <Icon as={stack.icon} />
                    <Text>{stack.name}</Text>
                </HStack>
            </WrapItem>
        ))}
    </Wrap>
);

const Capabilities = () => (
    <>
        <Expertises />
        <TechStacks />
    </>
);

export default Capabilities;
