import React, { useState } from 'react';
import { Flex, Container, IconButton, Fade } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Fade in={isVisible}>
      <Flex
        justify="flex-end"
        position="fixed"
        zIndex={999}
        width="100%"
        bottom={{base: "6%", md: "8%"}}
      >
        <Container>
          <Flex width="100%" justify='flex-end'>
            <IconButton
              className='shadow hover-shadow'
              fontSize="1.5rem"
              icon={<FaArrowUp />}
              color='white'
              bgColor='blue.500'
              onClick={scrollToTop}
            />
          </Flex>
        </Container>
      </Flex>
    </Fade>
  );
};

export default ScrollToTop;
