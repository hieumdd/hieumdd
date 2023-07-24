import {
    Card,
    CardBody,
    Heading,
    HStack,
    Icon,
    Tag,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';

import { Service } from '../hooks/use-service';

type ServiceCardProps = Service;

export const ServiceCard = (props: ServiceCardProps) => {
    const { title, icon, description, tools } = props;

    return (
        <Card>
            <CardBody as={VStack} spacing={4} alignItems="stretch">
                <HStack>
                    <Icon as={icon} />
                    <Heading as="h3" size="sm">
                        {title}
                    </Heading>
                </HStack>
                <Text>{description}</Text>
                <Wrap>
                    {tools.map((tool, i) => (
                        <WrapItem key={i}>
                            <Tag variant="outline">{tool}</Tag>
                        </WrapItem>
                    ))}
                </Wrap>
            </CardBody>
        </Card>
    );
};
