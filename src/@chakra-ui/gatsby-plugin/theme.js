import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.lg',
      },
    },
  },
  styles: {
    global: {
      '*': {
        borderStyle: 'solid',
        borderRadius: 'lg',
      },
      '.shadow': {
        boxShadow: 'base',
      },
      '.hover-shadow': {
        _hover: {
          boxShadow: 'lg',
        },
      },
    },
  },
});
