import React, { useMemo } from 'react';
import {
    Container,
    Title,
    useMantineTheme,
    Divider,
    TextInput,
    Grid,
    Group,
    Center,
    Box,
    Textarea
} from '@mantine/core';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { SplashComponent } from '@/components/Splash';
import { Text } from '@mantine/core';

import {
    IconMail,
    IconMessages,
    IconClockHour4,
    IconDeviceMobile,
    IconMapPin,
    IconChevronRight
} from '@tabler/icons-react';
import { ReviewComponent } from './components';

const VisitUs = () => {
    const theme = useMantineTheme();
    const mapCenter = useMemo(
        () => ({ lat: 36.0820252, lng: -79.4752925 }),
        []
    );

    const mapOptions = useMemo(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: false
        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
    });
    return (
        <>
            <SplashComponent background="./visitUsSplash.png" visitUs />
            <Container fluid p={0} pos="relative" top={-100}>
                <Grid gutter={0}>
                    <Grid.Col lg={2.5}>
                        <Box
                            sx={{
                                backgroundColor: theme.other.colors.offWhite
                            }}
                            h={100}
                        >
                            <Center h="100%">
                                <Group>
                                    <IconMail size={50} />
                                    <Text fz={18} lh={25}>
                                        Info@CamCor.com
                                    </Text>
                                </Group>
                            </Center>
                        </Box>
                    </Grid.Col>
                    <Grid.Col lg={2.5}>
                        <Box
                            sx={{
                                backgroundColor: theme.other.colors.yellow
                            }}
                            h={100}
                        >
                            <Center h="100%">
                                <Group>
                                    <IconDeviceMobile size={50} />
                                    <Text fz={18} lh={25}>
                                        123.456.7890
                                    </Text>
                                </Group>
                            </Center>
                        </Box>
                    </Grid.Col>
                    <Grid.Col lg={2.5}>
                        <Box
                            sx={{
                                backgroundColor: theme.other.colors.offWhite
                            }}
                            h={100}
                        >
                            <Center h="100%">
                                <Group>
                                    <IconMessages size={50} />
                                    <Text fz={18} lh={25}>
                                        Support@CamCor.com
                                    </Text>
                                </Group>
                            </Center>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Container>
            <Container size="xl" mt={125}>
                <Grid>
                    <Grid.Col lg={5}>
                        <Divider
                            mt={50}
                            w={115}
                            mb={20}
                            size="lg"
                            color={theme.other.colors.yellow}
                        />
                        <Title fz={45}>
                            Let&apos;s get started on your... passport photo
                        </Title>
                        <Text fz={18}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </Text>
                        <Group>
                            <IconClockHour4 />
                            <Text fz={18}>
                                9:30am - 6:00pm | Tuesday - Saturday
                            </Text>
                        </Group>
                        <Group>
                            <IconMapPin />
                            <Text fz={18}>
                                2273 S Church St, Burlington, NC 27215
                            </Text>
                        </Group>
                    </Grid.Col>
                    <Grid.Col lg={6} offset={1}>
                        <Box
                            sx={{
                                backgroundColor: theme.other.colors.offWhite,
                                padding: 50
                            }}
                        >
                            <Text fz={27} fw={600} pb={20}>
                                Get In Touch
                            </Text>
                            <TextInput
                                placeholder="Full Name"
                                variant="filled"
                                radius="xs"
                                size="lg"
                            />
                            <Group position="center" spacing="xs" grow mt={20}>
                                <TextInput
                                    w="45%"
                                    placeholder="Phone Number"
                                    variant="filled"
                                    radius="xs"
                                    size="lg"
                                />
                                <TextInput
                                    w="45%"
                                    placeholder="Email Address"
                                    variant="filled"
                                    radius="xs"
                                    size="lg"
                                />
                            </Group>
                            <TextInput
                                mt={20}
                                placeholder="Subject Line"
                                variant="filled"
                                radius="xs"
                                size="lg"
                            />
                            <Textarea
                                mt={20}
                                placeholder="Message"
                                variant="filled"
                                radius="xs"
                                size="lg"
                                minRows={5}
                            />
                        </Box>
                    </Grid.Col>
                </Grid>
            </Container>

            <Container fluid p={0} mt={100}>
                {isLoaded ? (
                    <>
                        <GoogleMap
                            options={mapOptions}
                            zoom={16}
                            center={mapCenter}
                            mapContainerStyle={{
                                width: '100%',
                                height: '600px'
                            }}
                        >
                            <MarkerF position={mapCenter} label="Camcor Inc" />
                        </GoogleMap>
                    </>
                ) : (
                    <></>
                )}
            </Container>

            <Container size="xl" mt={100} mb={100}>
                <Grid>
                    <Grid.Col lg={4}>
                        <Divider
                            mt={20}
                            w={115}
                            mb={20}
                            size="lg"
                            color={theme.other.colors.yellow}
                        />
                        <Title fz={45}>Reviews</Title>
                        <Text fz={18}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </Text>
                        <Group spacing={10} className="clickable">
                            <Text fz={18} fw={800} color="black">
                                LEAVE A REVIEW
                            </Text>
                            <IconChevronRight
                                color={theme.other.colors.yellow}
                            />
                        </Group>
                    </Grid.Col>
                    <Grid.Col offset={1} lg={7}>
                        <ReviewComponent />
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
};

export { VisitUs };
