import { Box, BoxProps, AspectRatio } from '@chakra-ui/react';
import NextImage from 'next/image';

type Props = { src: string; alt: string; ratio: number } & Omit<BoxProps, 'as'>;

const Image = ({ src, alt, ratio, ...rest }: Props) => (
    <Box position="relative" {...rest}>
        <AspectRatio ratio={ratio}>
            <NextImage
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                src={src}
                blurDataURL={src}
                alt={alt}
            />
        </AspectRatio>
    </Box>
);

export default Image;
