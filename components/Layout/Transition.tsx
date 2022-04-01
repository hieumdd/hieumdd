import { FC } from 'react';
import { Fade } from '@chakra-ui/react';

const Transition: FC<{ _key: string }> = ({ _key, children }) => (
    <Fade key={_key} in={true}>
        {children}
    </Fade>
);

export default Transition;
