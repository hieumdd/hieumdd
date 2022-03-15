import React, { useRef, useEffect } from 'react';

import { VStack, Box } from '@chakra-ui/react';

const Comments = () => {
  const commentBox = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('repo', 'hieumdd/hieumdd');
    script.setAttribute('issue-term', 'pathname');
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(script);
    }
  }, []);

  return (
    <VStack w="100%" alignItems="flex-start">
      <Box w="100%" ref={commentBox} />
    </VStack>
  );
};

export default Comments;
