import { AspectRatio } from '@chakra-ui/react';
import NextImage from 'next/image';

type ArticleImageProps = {
    src: string;
    alt: string;
    ratio: number;
};

export const ArticleImage = ({ src, alt, ratio }: ArticleImageProps) => {
    return (
        <AspectRatio position="relative" ratio={ratio}>
            <NextImage
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                src={src}
                blurDataURL={src}
                alt={alt}
            />
        </AspectRatio>
    );
};
