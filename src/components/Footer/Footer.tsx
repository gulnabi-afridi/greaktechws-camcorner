import React from 'react';
import {
    Container,
    Flex,
    Grid,
    Box,
    Text,
    useMantineTheme,
    Center
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { IconHeart } from '@tabler/icons-react';

const Footer = () => {
    const theme = useMantineTheme();

    return (
        <Box sx={{ background: 'black' }}>
            <Container size="xl">
                <Flex direction="column">
                    <Grid pt={70} pb={40}>

                        <Grid.Col md={2.8}>
                            <Flex
                                direction="column"
                                justify="center"
                                align="center"
                            >
                                {/* logo */}

                                <Box
                                    sx={{
                                        width: '175px',
                                        height: '175px',
                                        position: 'relative'
                                    }}
                                >
                                    <Image
                                        src="/logoWhiteColor.png"
                                        alt=""
                                        fill
                                    />
                                </Box>
                                {/* stars */}

                                <Image
                                    src="/stars.png"
                                    alt=""
                                    width={108}
                                    height={20}
                                />
                            </Flex>
                        </Grid.Col>

                        {footerData.map((item, index) => {
                            return (
                                <Grid.Col key={index} md={2.2}>
                                    <Flex
                                        direction="column"
                                        align="start"
                                        gap={3}
                                    >
                                        {/*  */}
                                        <Text
                                            tt="uppercase"
                                            fz={17}
                                            fw={800}
                                            mb={4}
                                            color={theme.other.colors.yellow}
                                        >
                                            {item.category}
                                        </Text>
                                        {item.links.map((linkItem, index) => {
                                            return (
                                                <>
                                                    {item.category ===
                                                    'visit us' ? (
                                                        <Text
                                                            key={index}
                                                            color="white"
                                                            fz={17}
                                                            fw={500}
                                                            tt="capitalize"
                                                        >
                                                            {linkItem.link}
                                                        </Text>
                                                    ) : (
                                                        <Link
                                                            href={linkItem.path}
                                                            key={index}
                                                            style={{
                                                                color: 'white',
                                                                fontSize:
                                                                    '17px',
                                                                fontWeight:
                                                                    '500',
                                                                textTransform:
                                                                    'capitalize',
                                                                textDecoration:
                                                                    'none'
                                                            }}
                                                        >
                                                            {linkItem.link}
                                                        </Link>
                                                    )}
                                                </>
                                            );
                                        })}
                                    </Flex>
                                </Grid.Col>
                            );
                        })}

                    </Grid>

                    {/* copywrite text */}
                    <Flex
                        h={100}
                        direction="column"
                        justify="center"
                        align="center"
                        sx={{
                            borderTop: `2px solid ${theme.other.colors.yellow}`
                        }}
                    >
                        <Flex justify="center" gap={4} align="center">
                            <Text fz={15} fw={500} tt="uppercase" color="white">
                                COPYRIGHT CAMCOR 2022
                            </Text>
                            <Text
                                fz={15}
                                fw={500}
                                tt="uppercase"
                                color={theme.other.colors.yellow}
                            >
                                |
                            </Text>
                            <Text tt="uppercase" fz={15} fw={500} color="white">
                                MADE WITH
                            </Text>
                            <IconHeart
                                color={theme.other.colors.yellow}
                                fill={theme.other.colors.yellow}
                            />
                            <Text tt="uppercase" fz={15} fw={500} color="white">
                                IN CHARLOTTE
                            </Text>
                        </Flex>
                    </Flex>
                    
                </Flex>
            </Container>
        </Box>
    );
};

const footerData = [
    {
        category: 'shop',
        links: [
            {
                link: 'Camera Gear',
                path: '#'
            },
            {
                link: 'Lens & Optics',
                path: '#'
            },
            {
                link: 'Order Prints',
                path: '#'
            },
            {
                link: 'Frames',
                path: '#'
            },
            {
                link: 'Gifts',
                path: '#'
            }
        ]
    },
    {
        category: 'SERVICES',
        links: [
            {
                link: 'Photo Prints',
                path: '#'
            },
            {
                link: 'Film Development',
                path: '#'
            },
            {
                link: 'Printing & Scanning',
                path: '#'
            },
            {
                link: 'Custom Photo Gifts',
                path: '#'
            },
            {
                link: 'Video Transfer',
                path: '#'
            },
            {
                link: 'Lamination',
                path: '#'
            },
            {
                link: 'Equipment Rental',
                path: '#'
            }
        ]
    },
    {
        category: 'ACCOUNT',
        links: [
            {
                link: 'Login',
                path: '#'
            },
            {
                link: 'Sign Up',
                path: '#'
            },
            {
                link: 'Dashboard',
                path: '#'
            }
        ]
    },
    {
        category: 'visit us',
        links: [
            {
                link: '2273 S Church St, Burlington, NC 27215',
                path: '#'
            },
            {
                link: '336.228.0251',
                path: '#'
            },
            {
                link: 'Info@cameracorner.com',
                path: '#'
            }
        ]
    }
];

export { Footer };
