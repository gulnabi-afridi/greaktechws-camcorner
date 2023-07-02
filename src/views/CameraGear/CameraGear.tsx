import React, { useState } from 'react';
import {
    Container,
    Title,
    useMantineTheme,
    Divider,
    Grid,
    Box,
    Text,
    Group,
    Stack,
    Button,
    Center,
    BackgroundImage,
    Flex,
    Checkbox,
    Input
} from '@mantine/core';
import Image from 'next/image';
import {
    IconChevronRight,
    IconCamera,
    IconLamp2,
    IconLampOff,
    IconDeviceLaptop,
    IconShoppingBag
} from '@tabler/icons-react';
import { IconChevronLeft } from '@tabler/icons-react';
import { ProductCard } from '@/components/ProductCard';
import { SplashComponent } from '@/components/Splash';
import Pagination from '@/components/Pagination/Pagination';

const CameraGear = () => {
    const theme = useMantineTheme();
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPage: 6
    });

    return (
        <React.Fragment>
            <SplashComponent
                background="./cameraGearHome.png"
                title="Camera Gear"
                text="Find the perfect gear for your adventure"
                buttonText="Shop Now"
            />

            {/* explore the store section */}
            <Container size="xl" mt={40}>
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
                    {categoryData.map((item, index) => {
                        return (
                            <Grid.Col key={index} md={4} lg={2.4}>
                                <Flex
                                    direction={'column'}
                                    justify={'center'}
                                    align={'center'}
                                    gap={8}
                                >
                                    <Flex
                                        w={'100%'}
                                        h={220}
                                        maw={220}
                                        align={'center'}
                                        justify={'center'}
                                        sx={() => ({
                                            borderRadius: '100%',
                                            backgroundColor:
                                                theme.other.colors.offWhite
                                        })}
                                    >
                                        {item.icon}
                                    </Flex>
                                    <Text fz={18} fw={400}>
                                        {item.name}
                                    </Text>
                                </Flex>
                            </Grid.Col>
                        );
                    })}
                </Grid>
                <Center mt={110}>
                    <Group spacing={10} className="clickable">
                        <Text fz={18} fw={800}>
                            EXPLORE ALL SERVICES
                        </Text>
                        <IconChevronRight color={theme.other.colors.yellow} />
                    </Group>
                </Center>
            </Container>

            {/* ===> third section */}
            <BackgroundImage src="./cameraGear2.png" mt={70} h={500}>
                <Container size="xl" h="100%">
                    <Flex align="flex-end" justify="flex-start" h="90%">
                        <Stack align="flex-start" justify="flex-end" w="50%">
                            <Title order={1} fz={65} color="white" ta="left">
                                A Great Camera Needs a Great Lens
                            </Title>
                            <Group spacing={10} className="clickable">
                                <Text
                                    fz={18}
                                    fw={800}
                                    color={theme.other.colors.yellow}
                                >
                                    SHOP LENSES
                                </Text>
                                <IconChevronRight
                                    color={theme.other.colors.yellow}
                                />
                            </Group>
                        </Stack>
                    </Flex>
                </Container>
            </BackgroundImage>

            {/* ====> shop by brand */}
            <Box w={'100%'} bg={'black'} px={0} py={60}>
                <Container size="xl">
                    <Flex direction={'column'} gap={40}>
                        <Divider
                            size="md"
                            color={theme.other.colors.yellow}
                            labelPosition="center"
                            label={
                                <Title
                                    pr={30}
                                    pl={30}
                                    order={2}
                                    fz={45}
                                    color="white"
                                >
                                    Shop by Brand
                                </Title>
                            }
                        />
                        {/* brand name */}
                        <Grid>
                            {brandName.map((item, index) => {
                                return (
                                    <Grid.Col key={index} md={2.4}>
                                        <center>
                                            <Image
                                                src={item}
                                                width={155}
                                                height={43}
                                                alt=""
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </center>
                                    </Grid.Col>
                                );
                            })}
                        </Grid>
                    </Flex>
                </Container>
            </Box>

            <Container size="xl" py={60}>
                <Grid>
                    <Grid.Col
                        md={3}
                        px={0}
                        py={30}
                        sx={theme => ({
                            borderRight: `6px solid ${theme.other.colors.yellow}`
                        })}
                    >
                        {filterData.map((item, index) => {
                            return (
                                <Flex w={'100%'} direction={'column'}>
                                    {/* ===> category type */}
                                    <Flex
                                        w={'100%'}
                                        h={50}
                                        bg={'yellow'}
                                        justify={'start'}
                                        align={'center'}
                                        px={20}
                                    >
                                        <Text
                                            fz={18}
                                            fw={700}
                                            tt="uppercase"
                                            color="black"
                                        >
                                            {item.categoryType}
                                        </Text>
                                    </Flex>
                                    {/*  */}

                                    {item.categoryType === 'price' ? (
                                        <Flex
                                            direction={'column'}
                                            gap={26}
                                            py={16}
                                            px={20}
                                        >
                                            {/* ===> inputs */}
                                            <Grid
                                                justify={'center'}
                                                align={'center'}
                                            >
                                                <Grid.Col lg={5}>
                                                    <Input
                                                        type="number"
                                                        placeholder="$"
                                                        styles={() => ({
                                                            input: {
                                                                height: '43px',
                                                                borderRadius:
                                                                    '2px',
                                                                width: '100%',
                                                                fontSize:
                                                                    '18px',
                                                                border: '2px solid black',
                                                                ':focus': {
                                                                    border: '2px solid black'
                                                                },
                                                                '::placeholder':
                                                                    {
                                                                        color: 'black',
                                                                        fontSize:
                                                                            '18px'
                                                                    }
                                                            }
                                                        })}
                                                    />
                                                </Grid.Col>

                                                <Grid.Col lg={2}>
                                                    <Text fz={18} fw={400}>
                                                        to
                                                    </Text>
                                                </Grid.Col>
                                                <Grid.Col lg={5}>
                                                    <Input
                                                        type="number"
                                                        placeholder="$$$"
                                                        styles={() => ({
                                                            input: {
                                                                height: '43px',
                                                                width: '100%',
                                                                borderRadius:
                                                                    '2px',
                                                                fontSize:
                                                                    '18px',
                                                                border: '2px solid black',
                                                                ':focus': {
                                                                    border: '2px solid black'
                                                                },
                                                                '::placeholder':
                                                                    {
                                                                        color: 'black',
                                                                        fontSize:
                                                                            '18px'
                                                                    }
                                                            }
                                                        })}
                                                    />
                                                </Grid.Col>
                                            </Grid>
                                            <Flex
                                                justify={'center'}
                                                direction={'column'}
                                                gap={12}
                                                align={'start'}
                                            >
                                                {item.filter.map(
                                                    (item, index) => {
                                                        return (
                                                            <Checkbox
                                                                label={item}
                                                                color="yellow"
                                                                styles={() => ({
                                                                    input: {
                                                                        borderColor:
                                                                            'black',
                                                                        borderWidth: 2,
                                                                        borderRadius:
                                                                            '2px'
                                                                    },
                                                                    label: {
                                                                        color: 'black',
                                                                        fontSize:
                                                                            '18px'
                                                                    }
                                                                })}
                                                            />
                                                        );
                                                    }
                                                )}
                                            </Flex>
                                        </Flex>
                                    ) : (
                                        <Flex
                                            justify={'center'}
                                            direction={'column'}
                                            gap={12}
                                            pl={20}
                                            align={'start'}
                                            py={16}
                                            px={20}
                                        >
                                            {item.filter?.map(
                                                (label, index) => {
                                                    return (
                                                        <Checkbox
                                                            label={label}
                                                            color="yellow"
                                                            styles={() => ({
                                                                input: {
                                                                    borderColor:
                                                                        'black',
                                                                    borderWidth: 2,
                                                                    borderRadius:
                                                                        '2px'
                                                                },
                                                                label: {
                                                                    color: 'black',
                                                                    fontSize:
                                                                        '18px'
                                                                }
                                                            })}
                                                        />
                                                    );
                                                }
                                            )}
                                        </Flex>
                                    )}
                                </Flex>
                            );
                        })}
                    </Grid.Col>

                    <Grid.Col md={9}>
                        <Box w={'100%'}>
                            <Grid ml={4} py={22}>
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                    (item, index) => {
                                        return (
                                            <Grid.Col md={6} lg={4}>
                                                <ProductCard />
                                            </Grid.Col>
                                        );
                                    }
                                )}
                            </Grid>

                            {/* pagination */}
                            <Pagination />
                        </Box>
                    </Grid.Col>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

const categoryData = [
    {
        name: 'digital cameras',
        icon: <IconCamera stroke={1} size={100} />
    },
    {
        name: 'Lighting Equipment',
        icon: <IconLamp2 stroke={1} size={100} />
    },
    {
        name: 'Darkroom',
        icon: <IconLampOff stroke={1} size={100} />
    },
    {
        name: 'Digital Accessories',
        icon: <IconDeviceLaptop stroke={1} size={100} />
    },
    {
        name: 'Other Products',
        icon: <IconShoppingBag stroke={1} size={100} />
    }
];
const brandName = [
    '/brand1.png',
    '/brand2.png',
    '/brand3.png',
    '/brand4.png',
    '/brand5.png'
];
const filterData = [
    {
        categoryType: 'CATEGORIES',
        filter: [
            'Digital Cameras',
            'Lighting Gear',
            'Darkroom',
            'Digital Accessories',
            'Other Products'
        ]
    },
    {
        categoryType: 'brands',
        filter: [
            'Master Products',
            'Canon',
            'Nikon',
            'Sony',
            'Promaster',
            'Fuji',
            'Olympus',
            'Samsung',
            'Marshall',
            'Kodak',
            'Panasonic'
        ]
    },
    {
        categoryType: 'price',
        filter: [
            '$0 - $250',
            '$251 - $500',
            '$501 - $1,000',
            '$1,001 - $1,500',
            '$1,501 - $2,000',
            '$2,000+'
        ]
    }
];

export { CameraGear };
