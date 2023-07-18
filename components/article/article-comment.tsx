import { useRef, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

export const ArticleComment = () => {
    const commentBox = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://utteranc.es/client.js';
        script.setAttribute('theme', 'github-light');
        script.setAttribute('crossorigin', 'anonymous');
        script.setAttribute('repo', 'hieumdd/hieumdd');
        script.setAttribute('issue-term', 'pathname');

        commentBox && commentBox.current && commentBox.current.appendChild(script);
    }, []);

    return <Flex ref={commentBox} />;
};
