import { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

export const ArticleComment = () => {
    const commentBox = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://utteranc.es/client.js';
        script.setAttribute('theme', 'github-light');
        script.setAttribute('crossorigin', 'anonymous');
        script.setAttribute('repo', 'hieumdd/hieumdd');
        script.setAttribute('issue-term', 'pathname');

        (commentBox.current as HTMLDivElement).appendChild(script);
    }, []);

    return <Box ref={commentBox} />;
};
