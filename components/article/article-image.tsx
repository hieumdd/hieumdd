import { AspectRatio, useToken } from '@chakra-ui/react';
import NextImage from 'next/image';

type ArticleImageProps = {
    src: string;
    alt: string;
    ratio: number;
};

export const ArticleImage = ({ src, alt, ratio }: ArticleImageProps) => {
    const borderRadius = useToken('borderRadius', 'md');
    
    return (
        <AspectRatio position="relative" ratio={ratio} borderRadius="md">
            <NextImage
                placeholder="blur"
                src={src}
                blurDataURL={src}
                alt={alt}
                style={{ borderRadius, objectFit: 'cover' }}
                fill
            />
        </AspectRatio>
    );
};
