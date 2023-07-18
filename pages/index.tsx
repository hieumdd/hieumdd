import type { NextPage } from 'next';
import {
    Box,
    Button,
    Heading,
    HStack,
    Icon,
    Link,
    SimpleGrid,
    Stack,
    Tag,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { useLottie } from 'lottie-react';

import { ArticleList } from '../components/article/article-list';
import { MDXFile, getFiles } from '../services/mdx.service';
import animationData from '../public/lottie/hello.json';
import { Expertise, useExpertises } from '../hooks/use-expertise';

type ExpertiseCardProps = Expertise;

const ExpertiseCard = (props: ExpertiseCardProps) => {
    const { title, icon, description, tools } = props;

    return (
        <VStack p="1rem" spacing="1em">
            <HStack fontSize="1.5em" align="flex-start" spacing="0.75em">
                <Box p={1}>
                    <Icon as={icon} lineHeight="1.5em" />
                </Box>
                <Text fontWeight="bold">{title}</Text>
            </HStack>
            <Text>{description}</Text>
            <Wrap>
                {tools.map((tool, i) => (
                    <WrapItem key={i}>
                        <Tag variant="outline">{tool}</Tag>
                    </WrapItem>
                ))}
            </Wrap>
        </VStack>
    );
};

type HomeProps = {
    articles: MDXFile[];
};

const Home: NextPage<HomeProps> = ({ articles }) => {
    const lottieOptions = { animationData, loop: true, autoplay: true };

    const { View: LottieView } = useLottie(lottieOptions);

    const expertises = useExpertises();

    return (
        <VStack>
            <Stack
                align="center"
                direction={{ base: 'column-reverse', md: 'row' }}
                justifyContent={{ base: 'center', md: 'space-between' }}
                spacing="4em"
            >
                <Stack
                    direction="column"
                    align="flex-start"
                    textAlign="left"
                    spacing={{ base: '1em', md: '2em' }}
                    flex="1 0 50%"
                >
                    <Heading as="h1" fontSize="3em">
                        {`Hey, I'm HM`}
                    </Heading>
                    <Text>
                        Full-Stack Developer - Data Engineer, focused on{'  '}
                        <Link as="span" fontWeight="bold" href={process.env.REPO_URL}>
                            Python & Google Cloud Platform.
                        </Link>
                        This is my personal portfolio, where my self taught front-end skills are
                        practised.
                    </Text>
                    <Button as={Link} href={process.env.CV_URL}>
                        Get my CV
                    </Button>
                </Stack>

                <Box flex="0 0 40%">{LottieView}</Box>
            </Stack>
            <VStack>
                <Heading as="h2">Primary Expertises</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2em">
                    {expertises.map((expertise) => (
                        <ExpertiseCard key={expertise.title} {...expertise} />
                    ))}
                </SimpleGrid>
            </VStack>
            <VStack>
                <Heading as="h2">Latest Articles</Heading>
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
