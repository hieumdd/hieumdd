import { Card, CardBody, HStack, Icon, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type SocialCardProps = {
    label: string;
    icon: IconType;
    href: string;
};

export const SocialCard = ({ label, icon, href }: SocialCardProps) => {
    return (
        <Card>
            <CardBody as={LinkBox}>
                <HStack spacing={4}>
                    <Icon as={icon} />
                    <LinkOverlay href={href} isExternal>
                        {label}
                    </LinkOverlay>
                </HStack>
            </CardBody>
        </Card>
    );
};
