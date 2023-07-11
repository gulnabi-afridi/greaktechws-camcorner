import React from 'react';
import { Flex, Text, Box, Container } from '@mantine/core';
import Link from 'next/link';

const PrivacyPolicy = () => {
    return (
        <React.Fragment>
            {/* ===> status bar */}
            <Flex
                h="266px"
                direction="column"
                justify="center"
                align="center"
                bg="#F5F5F5"
            >
                <Text fz={45} fw={700} color="black">
                    Privacy Policy
                </Text>
                <Flex justify="center" align="center" gap={4}>
                    <Link
                        href="#"
                        style={{
                            fontSize: '18px',
                            fontWeight: 400,
                            color: 'black',
                            textDecoration: 'none'
                        }}
                    >
                        Dashboard
                    </Link>
                    <Text>&gt;</Text>
                    <Text fz={18} fw={400}>
                        Privacy Policy
                    </Text>
                </Flex>
            </Flex>
            <Box w="100%" bg="white">
                <Container size="lg" py={50}>
                    <Text fz={18} fw={700} color="black" mb={30}>
                        Last Updated: mm/dd/yyyy
                    </Text>
                    <Flex direction="column" gap={38}>
                        {privacyPolicy.map((item, index) => {
                            return (
                                <Text
                                    fz={18}
                                    fw={400}
                                    color="black"
                                    key={index}
                                >
                                    {item}
                                </Text>
                            );
                        })}
                    </Flex>
                </Container>
            </Box>
        </React.Fragment>
    );
};

const privacyPolicy = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus. Nec feugiat nisl pretium fusce id. At varius vel pharetra vel turpis nunc eget. Magna eget est lorem ipsum dolor. Blandit cursus risus at ultrices mi tempus. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Viverra ipsum nunc aliquet bibendum. Turpis egestas pretium aenean pharetra magna ac. Quis hendrerit dolor magna eget est lorem. Gravida arcu ac tortor dignissim convallis aenean. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Tempor orci dapibus ultrices in iaculis nunc sed augue. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Non blandit massa enim nec dui nunc. Dictum non consectetur a erat nam at. Sed viverra tellus in hac habitasse. Ullamcorper malesuada proin libero nunc consequat.',
    'Sed velit dignissim sodales ut eu sem integer vitae. Congue eu consequat ac felis donec et odio pellentesque diam. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Vel quam elementum pulvinar etiam non quam lacus. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Ullamcorper morbi tincidunt ornare massa. Facilisis mauris sit amet massa vitae tortor condimentum. Nunc aliquet bibendum enim facilisis gravida neque. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Nisi quis eleifend quam adipiscing. Arcu odio ut sem nulla pharetra diam. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Arcu risus quis varius quam quisque id. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Parturient montes nascetur ridiculus mus. Auctor elit sed vulputate mi sit amet mauris. Lorem ipsum dolor sit amet consectetur adipiscing. Faucibus et molestie ac feugiat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.',
    'Nunc faucibus a pellentesque sit amet porttitor eget dolor. Orci a scelerisque purus semper eget duis. Arcu odio ut sem nulla pharetra diam sit amet nisl. Et egestas quis ipsum suspendisse ultrices gravida dictum. Risus feugiat in ante metus dictum at tempor. Integer vitae justo eget magna fermentum iaculis. Et malesuada fames ac turpis egestas maecenas pharetra. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Morbi tristique senectus et netus et malesuada fames ac turpis. Pretium nibh ipsum consequat nisl vel pretium lectus. Eu feugiat pretium nibh ipsum.',
    'Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Quis varius quam quisque id diam vel quam. Id faucibus nisl tincidunt eget. Rhoncus urna neque viverra justo nec ultrices dui sapien. Pharetra magna ac placerat vestibulum lectus mauris. Turpis in eu mi bibendum neque. Ac feugiat sed lectus vestibulum. Nunc sed id semper risus in. Aliquam faucibus purus in massa tempor. Nec dui nunc mattis enim ut tellus. Sem nulla pharetra diam sit amet nisl suscipit. Sed id semper risus in hendrerit gravida. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Tellus at urna condimentum mattis pellentesque id nibh tortor. Sed felis eget velit aliquet. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.',
    'Nunc sed augue lacus viverra. Nunc non blandit massa enim. Dignissim suspendisse in est ante in nibh mauris cursus. Massa tempor nec feugiat nisl pretium fusce id. Pharetra vel turpis nunc eget. Elementum nisi quis eleifend quam adipiscing vitae. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Cursus in hac habitasse platea dictumst. Mattis rhoncus urna neque viverra justo nec. In nulla posuere sollicitudin aliquam ultrices sagittis. Elementum facilisis leo vel fringilla est ullamcorper. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Pellentesque eu tincidunt tortor aliquam nulla.',
    'Aenean euismod elementum nisi quis eleifend. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Nisl pretium fusce id velit ut. Lacus sed turpis tincidunt id aliquet. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Elit sed vulputate mi sit amet mauris commodo. Interdum velit laoreet id donec. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Ac turpis egestas integer eget aliquet. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Mattis molestie a iaculis at. Id velit ut tortor pretium viverra suspendisse potenti nullam. Leo vel orci porta non pulvinar neque laoreet. Suspendisse potenti nullam ac tortor vitae purus faucibus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Pretium vulputate sapien nec sagittis aliquam malesuada.',
    'Nisl vel pretium lectus quam id leo in vitae. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dis parturient montes nascetur ridiculus mus mauris. Nisi est sit amet facilisis. Aliquet eget sit amet tellus cras. Eget lorem dolor sed viverra ipsum. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. In fermentum posuere urna nec tincidunt. Non consectetur a erat nam at lectus urna. Tincidunt vitae semper quis lectus nulla at volutpat diam. Sit amet aliquam id diam maecenas. Amet consectetur adipiscing elit duis tristique sollicitudin. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'
];

export { PrivacyPolicy };
