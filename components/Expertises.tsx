import { VStack, Wrap, WrapItem, Text, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
    FaChartLine,
    FaCode,
    FaFingerprint,
    FaShoppingCart,
} from 'react-icons/fa';

type ExpertiseProps = {
    text: string;
    color: string;
    icon: IconType;
};

const data: ExpertiseProps[] = [
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
        <Wrap spacing="2rem" w="100%" justify="space-between">
            {data.map((field) => (
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

export default Expertises;
