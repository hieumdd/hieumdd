import { FC } from 'react';
import { Fade } from '@chakra-ui/react';

const Transition: FC<{ key: string }> = ({ key, children }) => (
    <Fade key={key} in={true}>
        {children}
    </Fade>
);

export default Transition;
