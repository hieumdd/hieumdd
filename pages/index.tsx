import type { NextPage } from 'next';
import { Box, Button, Heading, Link, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { useLottie } from 'lottie-react';

import { MDXFile, getFiles } from '../services/mdx.service';
import { useServices } from '../hooks/use-service';
import { useSocialLinks } from '../hooks/use-social-link';
import { ServiceCard } from '../components/service-card';
import { ArticleList } from '../components/article/article-list';
import animationData from '../public/lottie/hello.json';

type HomeProps = {
    articles: MDXFile[];
};

const Home: NextPage<HomeProps> = ({ articles }) => {
    const { View: LottieView } = useLottie({ animationData, loop: true, autoplay: true });

    const services = useServices();
    const { cv, github } = useSocialLinks();

    return (
        <VStack spacing={8}>
            <Stack
                align="center"
                direction={{ base: 'column-reverse', md: 'row' }}
                justifyContent={{ base: 'center', md: 'space-between' }}
                spacing={4}
            >
                <VStack
                    direction="column"
                    align="flex-start"
                    textAlign="left"
                    spacing={{ base: 2, md: 4 }}
                    flex="1 0 50%"
                >
                    <Heading as="h1" size="xl">
                        {`Hey, I'm HM`}
                    </Heading>
                    <Text>
                        {`I'm a Full-Stack Developer - Data Engineer, focused on `}
                        <Link fontWeight="bold" href={github} isExternal>
                            Google Cloud Platform & NetSuite.
                        </Link>
                    </Text>
                    <Button as={Link} variant="solid" href={cv} isExternal>
                        Get my CV
                    </Button>
                </VStack>
                <Box flex="0 0 40%">{LottieView}</Box>
            </Stack>
            <VStack spacing={4} alignItems="stretch">
                <Heading as="h2" size="lg">
                    Services
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2em">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </SimpleGrid>
            </VStack>
            <VStack spacing={4} alignItems="stretch">
                <Heading as="h2" size="lg">
                    Latest Articles
                </Heading>
                <ArticleList articles={articles} />
            </VStack>
        </VStack>
    );
};

export const getStaticProps = async () => {
    const articles = await getFiles('articles').then((articles) => {
        return articles.slice(0, 2);
    });

    return { props: { layout: 'home', title: 'Home', articles } };
};

export default Home;
