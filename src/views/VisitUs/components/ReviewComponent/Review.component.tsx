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
    Textarea,
    Image
} from '@mantine/core';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { SplashComponent } from '@/components/Splash';
import { Text } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';

const ReviewComponent = () => {
    const theme = useMantineTheme();
    return (
        <Box
            sx={{
                backgroundColor: 'black',
                paddingTop: 27,
                height: 300,
                width: 375
            }}
        >
            <Group pl={20}>
                <IconQuote size={45} color={theme.other.colors.yellow} />
            </Group>
            <Text fz={18} color="white" pl={20} pb={20}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
            </Text>
            <Text fz={18} color="white" pl={20} pb={10}>
                - John Doe. Photographer
            </Text>
            <Image src="./reviewBottom.png" alt="image" />
        </Box>
    );
};

export { ReviewComponent };
