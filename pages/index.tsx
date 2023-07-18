import type { NextPage } from 'next';
import {
    Box,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Container,
    Flex,
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
import { Service, useServices } from '../hooks/use-service';

type ServiceCardProps = Service;

const ServiceCard = (props: ServiceCardProps) => {
    const { title, icon, description, tools } = props;

    return (
        <Card>
            <CardBody as={VStack} spacing={4} alignItems="stretch">
                <HStack>
                    <Icon as={icon} />
                    <Heading as="h3" size="sm">
                        {title}
                    </Heading>
                </HStack>
                <Text>{description}</Text>
                <Wrap>
                    {tools.map((tool, i) => (
                        <WrapItem key={i}>
                            <Tag variant="outline">{tool}</Tag>
                        </WrapItem>
                    ))}
                </Wrap>
            </CardBody>
        </Card>
    );
};

type HomeProps = {
    articles: MDXFile[];
};

const Home: NextPage<HomeProps> = ({ articles }) => {
    const lottieOptions = { animationData, loop: true, autoplay: true };

    const { View: LottieView } = useLottie(lottieOptions);

    const services = useServices();

    return (
        <Container as={VStack} spacing={8}>
            <Stack
                align="center"
                direction={{ base: 'column-reverse', md: 'row' }}
                justifyContent={{ base: 'center', md: 'space-between' }}
                spacing="4rem"
            >
                <VStack
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
                        {`I'm a Full-Stack Developer - Data Engineer, focused on `}
                        <Link as="span" fontWeight="bold" href={process.env.REPO_URL}>
                            Google Cloud Platform & NetSuite.
                        </Link>
                    </Text>
                    <Button as={Link} href={process.env.CV_URL}>
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
                <Heading as="h2">Latest Articles</Heading>
                {/* <ArticleList articles={articles} /> */}
            </VStack>
        </Container>
    );
};

export const getStaticProps = async () => {
    const articles = await getFiles('articles').then((articles) => {
        return articles.slice(0, 2);
    });

    return { props: { layout: 'home', title: 'Home', articles } };
};

export default Home;
