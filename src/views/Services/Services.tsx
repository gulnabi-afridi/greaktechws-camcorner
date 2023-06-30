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
    Center,
    BackgroundImage,
    Flex,
    Box,
    Tabs
} from '@mantine/core';
import { SplashComponent } from '@/components/Splash';
import { Text } from '@mantine/core';

import {
    IconChevronRight,
    IconPhoto,
    IconPrinter,
    IconVocabulary,
    IconAddressBook,
    IconMug,
    IconCamera,
    IconWallpaper,
    IconDeviceSdCard,
    IconVideo
} from '@tabler/icons-react';

const Services = () => {
    const theme = useMantineTheme();
    return (
        <>
            <SplashComponent
                black
                background="./servicesSplash.png"
                title="Our Services"
                text="We are here to help you with all of your photo needs."
                buttonText="Visit the Store"
            />
            <Container fluid p={0}>
                <Grid gutter={5}>
                    <Grid.Col lg={3}>
                        <Box
                            sx={{
                                backgroundColor: theme.other.colors.offWhite
                            }}
                            h={100}
                        >
                            <Center h="100%">
                                <Group>
                                    <IconPhoto size={50} />
                                    <Text fz={18} lh={25}>
                                        Photo Prints
                                    </Text>
                                </Group>
                            </Center>
                        </Box>
                    </Grid.Col>
                    <Grid.Col lg={3}>
                        <Box
                            sx={{
                                backgroundColor: theme.other.colors.offWhite
                            }}
                            h={100}
                        >
                            <Center h="100%">
                                <Group>
                                    <IconPrinter size={50} />
                                    <Text fz={18} lh={25}>
                                        Printing & Scanning
                                    </Text>
                                </Group>
                            </Center>
                        </Box>
                    </Grid.Col>
                    <Grid.Col lg={3}>
                        <Box
                            sx={{
                                backgroundColor: theme.other.colors.offWhite
                            }}
                            h={100}
                        >
                            <Center h="100%">
                                <Group>
                                    <IconVocabulary size={50} />
                                    <Text fz={18} lh={25}>
                                        Photo Books
                                    </Text>
                                </Group>
                            </Center>
                        </Box>
                    </Grid.Col>
                    <Grid.Col lg={3}>
                        <Box
                            sx={{
                                backgroundColor: theme.other.colors.offWhite
                            }}
                            h={100}
                        >
                            <Center h="100%">
                                <Group>
                                    <IconAddressBook size={50} />
                                    <Text fz={18} lh={25}>
                                        Passport Photos
                                    </Text>
                                </Group>
                            </Center>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Container>

            <Container size="lg" mt={125}>
                <Tabs defaultValue="second">
                    <Tabs.List position="center">
                        <Tabs.Tab
                            value="first"
                            fz={27}
                            fw={500}
                            pb={30}
                            mr={50}
                            w="20%"
                        >
                            Online
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="second"
                            fz={27}
                            fw={500}
                            pb={30}
                            mr={50}
                            w="20%"
                        >
                            In-Store
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="third"
                            fz={27}
                            fw={500}
                            pb={30}
                            w="20%"
                        >
                            Get Started
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="first" fz={18} mt={50} ta="center">
                        <Grid>
                            <Grid.Col lg={2} />
                            <Grid.Col lg={8}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla.
                            </Grid.Col>
                            <Grid.Col lg={2} />
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="second" fz={18} mt={50} ta="center">
                        <Grid>
                            <Grid.Col lg={2} />
                            <Grid.Col lg={8}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla.
                            </Grid.Col>
                            <Grid.Col lg={2} />
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="third" fz={18} mt={50} ta="center">
                        <Grid>
                            <Grid.Col lg={2} />
                            <Grid.Col lg={8}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla.
                            </Grid.Col>
                            <Grid.Col lg={2} />
                        </Grid>
                    </Tabs.Panel>
                </Tabs>
            </Container>

            <Container size="xl" mt={125}>
                <Grid>
                    <Grid.Col lg={6}>
                        <Image
                            src="./servicesPrinter.png"
                            alt="Chair Picture"
                        />
                    </Grid.Col>
                    <Grid.Col lg={6}>
                        <Image
                            src="./servicesMountain.png"
                            alt="Chair Picture"
                        />
                    </Grid.Col>
                </Grid>
            </Container>

            <Container size="xl" mt={125} mb={200}>
                <Divider
                    mb={50}
                    size="lg"
                    color={theme.other.colors.yellow}
                    labelPosition="center"
                    label={
                        <Title pr={30} pl={30} order={2} fz={45} color="black">
                            Explore Services
                        </Title>
                    }
                />
                <Grid>
                    <Grid.Col lg={2} mr={40} className="clickable">
                        <Stack align="center">
                            <Box
                                sx={{
                                    backgroundColor:
                                        theme.other.colors.offWhite,
                                    borderRadius: 220,
                                    height: 220,
                                    width: 220
                                }}
                            >
                                <Center h={220}>
                                    <IconPhoto size={80} />
                                </Center>
                            </Box>
                            <Text fz={18}>Photo Prints</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col lg={2} mr={40} className="clickable">
                        <Stack align="center">
                            <Box
                                sx={{
                                    backgroundColor:
                                        theme.other.colors.offWhite,
                                    borderRadius: 220,
                                    height: 220,
                                    width: 220
                                }}
                            >
                                <Center h={220}>
                                    <IconPrinter size={80} />
                                </Center>
                            </Box>
                            <Text fz={18}>Printing & Scanning</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col lg={2} mr={40} className="clickable">
                        <Stack align="center">
                            <Box
                                sx={{
                                    backgroundColor:
                                        theme.other.colors.offWhite,
                                    borderRadius: 220,
                                    height: 220,
                                    width: 220
                                }}
                            >
                                <Center h={220}>
                                    <IconVocabulary size={80} />
                                </Center>
                            </Box>
                            <Text fz={18} ta="center">
                                Photo Books, Calendars & Cards
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col lg={2} mr={40} className="clickable">
                        <Stack align="center">
                            <Box
                                sx={{
                                    backgroundColor:
                                        theme.other.colors.offWhite,
                                    borderRadius: 220,
                                    height: 220,
                                    width: 220
                                }}
                            >
                                <Center h={220}>
                                    <IconAddressBook size={80} />
                                </Center>
                            </Box>
                            <Text fz={18}>Passport Photos</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col lg={2} mr={40} className="clickable">
                        <Stack align="center">
                            <Box
                                sx={{
                                    backgroundColor:
                                        theme.other.colors.offWhite,
                                    borderRadius: 220,
                                    height: 220,
                                    width: 220
                                }}
                            >
                                <Center h={220}>
                                    <IconMug size={80} />
                                </Center>
                            </Box>
                            <Text fz={18}>Custom Photo Gifts</Text>
                        </Stack>
                    </Grid.Col>
                </Grid>

                <Grid mt={25}>
                    <Grid.Col lg={2} offset={1} mr={40} className="clickable">
                        <Stack align="center">
                            <Box
                                sx={{
                                    backgroundColor:
                                        theme.other.colors.offWhite,
                                    borderRadius: 220,
                                    height: 220,
                                    width: 220
                                }}
                            >
                                <Center h={220}>
                                    <IconCamera size={80} />
                                </Center>
                            </Box>
                            <Text fz={18}>Equipment Rentals</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col lg={2} mr={40} className="clickable">
                        <Stack align="center">
                            <Box
                                sx={{
                                    backgroundColor:
                                        theme.other.colors.offWhite,
                                    borderRadius: 220,
                                    height: 220,
                                    width: 220
                                }}
                            >
                                <Center h={220}>
                                    <IconVideo size={80} />
                                </Center>
                            </Box>
                            <Text fz={18}>Film Development</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col lg={2} mr={40} className="clickable">
                        <Stack align="center">
                            <Box
                                sx={{
                                    backgroundColor:
                                        theme.other.colors.offWhite,
                                    borderRadius: 220,
                                    height: 220,
                                    width: 220
                                }}
                            >
                                <Center h={220}>
                                    <IconDeviceSdCard size={80} />
                                </Center>
                            </Box>
                            <Text fz={18}>Video Transfers</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col lg={2} mr={40} className="clickable">
                        <Stack align="center">
                            <Box
                                sx={{
                                    backgroundColor:
                                        theme.other.colors.offWhite,
                                    borderRadius: 220,
                                    height: 220,
                                    width: 220
                                }}
                            >
                                <Center h={220}>
                                    <IconWallpaper size={80} />
                                </Center>
                            </Box>
                            <Text fz={18}>Lamination</Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>

            <Container fluid p={0}>
                <BackgroundImage src="./servicesFooterSplash.png" h={700}>
                    <Container size="xl" h="100%">
                        <Flex align="flex-end" justify="flex-start" h="75%">
                            <Stack justify="flex-start" w="50%">
                                <Title order={1} fz={65} color="white" fw={700}>
                                    Our Experts Are Ready To Help
                                </Title>
                                <Group spacing={10} className="clickable">
                                    <Text
                                        fz={18}
                                        fw={800}
                                        color={theme.other.colors.yellow}
                                    >
                                        VISIT THE STORE
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

export { Services };
