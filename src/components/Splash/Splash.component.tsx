import React from 'react';
import {
    Container,
    Stack,
    Title,
    BackgroundImage,
    Button,
    Grid,
    Center,
    Box,
    Group,
    useMantineTheme
} from '@mantine/core';
import { Text } from '../Text';
import {
    IconSearch,
    IconShoppingBag,
    IconPhoneCall,
    IconPhoto,
    IconPrinter,
    IconVocabulary,
    IconAddressBook
} from '@tabler/icons-react';

type SProps = {
    title?: string;
    text?: string;
    background: string;
    buttonText?: string;
    black?: boolean;
    visitUs?: boolean;
};

const SplashComponent = ({
    title,
    text,
    background,
    buttonText,
    black = false,
    visitUs = false
}: SProps) => {
    const theme = useMantineTheme();
    return (
        <Container fluid p={0}>
            <BackgroundImage src={background} h={800}>
                <Container size="lg" pl={0} h="100%">
                    <Grid h="100%">
                        <Grid.Col md={6} sx={{ marginTop: '150px' }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Title
                                    order={1}
                                    fz={65}
                                    color={black ? 'black' : 'white'}
                                >
                                    {title}
                                </Title>
                                <Text
                                    fz={27}
                                    fw={500}
                                    color={black ? 'black' : 'white'}
                                    w="75%"
                                    noMargin
                                >
                                    {text}
                                </Text>

                                {buttonText && (
                                    <Button size="lg" radius={0}>
                                        {buttonText}
                                    </Button>
                                )}
                            </Box>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end'
                                }}
                            >
                                <BackgroundImage
                                    src="./iconBackground.png"
                                    w={50}
                                    h={50}
                                    mb={10}
                                >
                                    <Center h={50}>
                                        <IconSearch size={25} />
                                    </Center>
                                </BackgroundImage>
                                <BackgroundImage
                                    src="./iconBackground.png"
                                    w={50}
                                    h={50}
                                    mb={10}
                                >
                                    <Center h={50}>
                                        <IconShoppingBag size={25} />
                                    </Center>
                                </BackgroundImage>
                                <BackgroundImage
                                    src="./iconBackground.png"
                                    w={50}
                                    h={50}
                                    mb={10}
                                >
                                    <Center h={50}>
                                        <IconPhoneCall size={25} />
                                    </Center>
                                </BackgroundImage>
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Container>
            </BackgroundImage>
        </Container>
    );
};

export { SplashComponent };
