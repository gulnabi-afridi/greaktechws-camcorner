import React from 'react';
import {
    Container,
    Title,
    useMantineTheme,
    Divider,
    Image,
    Grid,
    Group,
    Stack,
    Button,
    Center,
    BackgroundImage,
    Flex
} from '@mantine/core';
import { SplashComponent } from '@/components/Splash';
import { Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

const Home = () => {
    const theme = useMantineTheme();
    return (
        <>
            <SplashComponent
                background="./homeSplash.png"
                title="Camera Gear"
                text="Find the perfect gear for your adventure"
                buttonText="Shop Now"
            />
            <Container size="xl" mt={125} mb={200}>
                <Divider
                    mb={50}
                    size="md"
                    color={theme.other.colors.yellow}
                    labelPosition="center"
                    label={
                        <Title pr={30} pl={30} order={2} fz={45} color="black">
                            Explore The Store
                        </Title>
                    }
                />
                <Grid>
                    <Grid.Col lg={4}>
                        <Image src="./chair.png" alt="Chair Picture" />
                    </Grid.Col>
                    <Grid.Col lg={4}>
                        <Image src="./lens.png" alt="Chair Picture" />
                    </Grid.Col>
                    <Grid.Col lg={4}>
                        <Image src="./frames.png" alt="Chair Picture" />
                    </Grid.Col>
                </Grid>
                <Grid mt={10}>
                    <Grid.Col lg={6}>
                        <Image src="./personCamera.png" alt="Chair Picture" />
                    </Grid.Col>
                    <Grid.Col lg={6}>
                        <Image src="./gifts.png" alt="Chair Picture" />
                    </Grid.Col>
                </Grid>
            </Container>
            <Container
                fluid
                sx={{ backgroundColor: theme.other.colors.lightGray }}
                h={550}
                pl={0}
            >
                <Grid h="100%">
                    <Grid.Col lg={4} offset={2}>
                        <Stack h="100%" justify="center">
                            <Divider
                                size="lg"
                                color={theme.other.colors.yellow}
                                w={100}
                            />
                            <Title order={2} fz={45}>
                                Our Story
                            </Title>
                            <Text fz={18} fw={400}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla.
                            </Text>
                            <Group>
                                <Button mt={25} size="lg" radius={0}>
                                    Visit our store
                                </Button>
                            </Group>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col lg={4} ml={30}>
                        <Image
                            src="./videoPlaceholder.png"
                            alt="Chair Picture"
                            pos="relative"
                            top={-80}
                            height={530}
                        />
                    </Grid.Col>
                </Grid>
            </Container>
            <Container size="xl" mt={125} mb={200}>
                <Divider
                    mb={20}
                    size="lg"
                    color={theme.other.colors.yellow}
                    labelPosition="center"
                    label={
                        <Title pr={30} pl={30} order={2} fz={45} color="black">
                            Our Services
                        </Title>
                    }
                />
                <Center>
                    <Text fz={22} fw={500}>
                        Explore the desk to discover our services!
                    </Text>
                </Center>
                <Center mt={115}>
                    <Image src="./services.png" alt="Chair Picture" />
                </Center>
                <Center mt={110}>
                    <Group spacing={10} className="clickable">
                        <Text fz={18} fw={800}>
                            EXPLORE ALL SERVICES
                        </Text>
                        <IconChevronRight color={theme.other.colors.yellow} />
                    </Group>
                </Center>
            </Container>
            <Container fluid p={0}>
                <BackgroundImage src="./homeFooterSplash.png" h={700}>
                    <Container size="xl" h="100%">
                        <Flex align="flex-end" justify="flex-end" h="90%">
                            <Stack align="flex-end" justify="flex-end" w="50%">
                                <Title
                                    order={1}
                                    fz={65}
                                    color="white"
                                    ta="right"
                                >
                                    Professional High Quality Prints
                                </Title>
                                <Group spacing={10} className="clickable">
                                    <Text
                                        fz={18}
                                        fw={800}
                                        color={theme.other.colors.yellow}
                                    >
                                        EXPLORE SERVICES
                                    </Text>
                                    <IconChevronRight
                                        color={theme.other.colors.yellow}
                                    />
                                </Group>
                            </Stack>
                        </Flex>
                    </Container>
                </BackgroundImage>
            </Container>
        </>
    );
};

export { Home };
