import { FC } from 'react';
import { Fade } from '@chakra-ui/react';

const Transition: FC<{ tKey: string }> = ({ tKey, children }) => (
    <Fade key={tKey} in={true}>
        {children}
    </Fade>
);

export default Transition;
