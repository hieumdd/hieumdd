import { FC } from 'react';
import { Fade } from '@chakra-ui/react';

const Transition: FC<{ route: string }> = ({ route, children }) => (
    <Fade key={route} in={true}>
        {children}
    </Fade>
);

export default Transition;
