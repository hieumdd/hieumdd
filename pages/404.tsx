import { Center } from '@chakra-ui/react';
import { useLottie } from 'lottie-react';

import animationData from '../public/lottie/404.json';

const NotFound = () => {
    const { View: LottieView } = useLottie({
        animationData,
        loop: true,
        autoplay: true,
        width: 400,
        height: 400,
    });

    return <Center>{LottieView}</Center>;
};

export const getStaticProps = () => ({ props: { title: '404' } });

export default NotFound;
