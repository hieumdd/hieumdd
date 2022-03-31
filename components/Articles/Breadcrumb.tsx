import { FC } from 'react';
import NextLink from 'next/link';
import {
    Breadcrumb as ChakraBreadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';

type Props = {
    href: string;
    title: string;
};

const Breadcrumb: FC<Props> = ({ href, title }) => (
    <ChakraBreadcrumb>
        <BreadcrumbItem>
            <NextLink href="/" passHref>
                <BreadcrumbLink>Home</BreadcrumbLink>
            </NextLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <NextLink href={href} passHref>
                <BreadcrumbLink isCurrentPage>{title}</BreadcrumbLink>
            </NextLink>
        </BreadcrumbItem>
    </ChakraBreadcrumb>
);

export default Breadcrumb;
