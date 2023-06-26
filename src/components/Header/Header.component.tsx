import React from 'react';
import {
    Header,
    Container,
    Flex,
    Image,
    BackgroundImage,
    Center
} from '@mantine/core';
import { Text } from '../Text';
import { IconUserCircle } from '@tabler/icons-react';
import { useRouter } from 'next/router';

const HeaderComponent = () => {
    const router = useRouter();
    const routeToPage = path => {
        router.push(path);
    };

    return (
        <Header height={140}>
            <Container size="xl" h={140}>
                <Flex justify="center" align="center" h={140}>
                    <Text
                        fw={600}
                        fz={18}
                        tt="uppercase"
                        onClick={() => routeToPage('/cameragear')}
                        className="clickable"
                    >
                        Camera Gear
                    </Text>
                    <Text
                        fw={600}
                        fz={18}
                        tt="uppercase"
                        ml={30}
                        className="clickable"
                    >
                        Lens & Optics
                    </Text>
                    <Text
                        fw={600}
                        fz={18}
                        tt="uppercase"
                        ml={30}
                        className="clickable"
                    >
                        Unique Finds
                    </Text>
                    <Center pos="relative" top={30}>
                        <BackgroundImage src="./logoCircle.png" w={175} ml={50}>
                            <Image
                                className="clickable"
                                src="./logo.png"
                                alt="Logo"
                                width={175}
                                ml={2}
                            />
                        </BackgroundImage>
                    </Center>
                    <Text
                        fw={600}
                        fz={18}
                        tt="uppercase"
                        ml={50}
                        className="clickable"
                    >
                        Order Prints
                    </Text>
                    <Text
                        fw={600}
                        fz={18}
                        tt="uppercase"
                        ml={30}
                        className="clickable"
                    >
                        Frames
                    </Text>
                    <Text
                        fw={600}
                        fz={18}
                        tt="uppercase"
                        ml={30}
                        className="clickable"
                        onClick={() => routeToPage('/services')}
                    >
                        Services
                    </Text>
                    <Text
                        fw={600}
                        fz={18}
                        tt="uppercase"
                        ml={30}
                        mr={30}
                        className="clickable"
                        onClick={() => routeToPage('/visitUs')}
                    >
                        Visit Us
                    </Text>
                    <IconUserCircle size={25} className="clickable" />
                </Flex>
            </Container>
        </Header>
    );
};

export { HeaderComponent };
