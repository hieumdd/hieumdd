import { AspectRatio } from '@chakra-ui/react';
import NextImage from 'next/image';

type ArticleImageProps = {
    src: string;
    alt: string;
    ratio: number;
};

export const ArticleImage = ({ src, alt, ratio }: ArticleImageProps) => {
    return (
        <AspectRatio position="relative" ratio={ratio} borderRadius="md">
            <NextImage
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL={src}
                src={src}
                alt={alt}
                style={{ borderRadius: '6px' }}
            />
        </AspectRatio>
    );
};
