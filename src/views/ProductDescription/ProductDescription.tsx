import React, { useState } from 'react';
import {
    Box,
    Container,
    useMantineTheme,
    Flex,
    Grid,
    Text,
    Checkbox,
    NumberInput,
    Button,
    Accordion,
    UnstyledButton,
    Modal
} from '@mantine/core';
import Link from 'next/link';
import {
    IconHeart,
    IconMinus,
    IconSearch,
    IconShoppingBag,
    IconPhoneCall,
    IconPrinter,
    IconX,
    IconPlus
} from '@tabler/icons-react';
import { ProductCard } from '@/components/ProductCard';
import ModalWrapper from '@/components/ModalWrapper/ModalWrapper';
import Image from 'next/image';

const ProductDescription = () => {
    const [favorite, setFavorite] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showSpecifications, setShowSpecifications] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const theme = useMantineTheme();

    return (
        <React.Fragment>
            {/* ===> status bar */}

            <Box w="100%" h={100} bg="#F5F5F5">
                <Container size="xl">
                    <Flex justify="start" gap={4} h={100} align="center">
                        <Link
                            href="#"
                            style={{
                                fontSize: '18px',
                                textDecoration: 'none',
                                color: 'black',
                                textTransform: 'capitalize'
                            }}
                        >
                            Camera Gear
                        </Link>
                        <Text>/</Text>
                        <Link
                            href="#"
                            style={{
                                fontSize: '18px',
                                textDecoration: 'none',
                                color: 'black',
                                textTransform: 'capitalize'
                            }}
                        >
                            Camera Gear
                        </Link>
                        <Text>/</Text>
                        <Text fz={18} tt="capitalize" color="black">
                            canon
                        </Text>
                    </Flex>
                </Container>
            </Box>

            <Container size="xl" sx={{ position: 'relative' }}>
                <Grid gutter={30} py={36}>
                    {/* product image */}
                    <Grid.Col span={5}>
                        <Box
                            w="100%"
                            h="100%"
                            sx={{
                                position: 'relative',
                                border: '2px solid black'
                            }}
                        >
                            <Image src="/productImage.png" fill alt="" />
                        </Box>
                    </Grid.Col>
                    {/* product description */}
                    <Grid.Col span={7} py={36}>
                        <Flex direction="column" gap={20} align="start">
                            <Text
                                fz={27}
                                tt="capitalize"
                                fw={600}
                                lh="32px"
                                color="black"
                            >
                                Canon EOS Rebel T7 24.1 Megapixel Digital SLR
                                Camera with Lens - 18 mm - 55 mm (Lens 1), 75 mm
                                - 300 mm (Lens 2)
                            </Text>
                            <Text fz={18} fw={400} color="black" tt="uppercase">
                                CAMCOR ITEM NO. 113008847 | MFG. PART NO.
                                2727C021
                            </Text>

                            {/* price + stock */}
                            <Flex direction="column">
                                <Flex justify="center" align="center">
                                    <Text
                                        fz={27}
                                        fw={600}
                                        color={theme.other.colors.yellow}
                                    >
                                        $499.99
                                    </Text>
                                    <Text fz={16} fw={400} color="black">
                                        ORIGINAL $599.99
                                    </Text>
                                </Flex>
                                {/* in stock */}
                                <Text
                                    tt="uppercase"
                                    fz={18}
                                    fw={700}
                                    color="black"
                                >
                                    in stock
                                </Text>
                            </Flex>
                            {/* extend service argument */}
                            <Flex direction="column" gap={10}>
                                <Text
                                    fw={600}
                                    fz={18}
                                    color="black"
                                    tt="capitalize"
                                >
                                    Extended Service Agreement:
                                </Text>
                                {serviceArguments.map((item, index) => {
                                    return (
                                        <Checkbox
                                            key={index}
                                            label={item.label}
                                            color="yellow"
                                            styles={() => ({
                                                input: {
                                                    borderColor: 'black',
                                                    borderWidth: 2,
                                                    borderRadius: '2px'
                                                },
                                                label: {
                                                    color: 'black',
                                                    fontSize: '18px'
                                                }
                                            })}
                                        />
                                    );
                                })}
                            </Flex>
                            {/* product quantity + add to cart button + add to favorite button */}
                            <Flex
                                gap={20}
                                mt={16}
                                justify="center"
                                align="center"
                            >
                                <NumberInput
                                    styles={() => ({
                                        input: {
                                            fontWeight: 700,
                                            height: '54px',
                                            width: '90px',
                                            fontSize: '18px',
                                            border: '2px solid black',
                                            '&:focus': {
                                                border: '2px solid black'
                                            }
                                        },
                                        rightSection: {
                                            '& button': {
                                                '&:hover': {
                                                    backgroundColor:
                                                        'transparent !important'
                                                }
                                            }
                                        },
                                        controlUp: {
                                            border: '0px'
                                        },
                                        controlDown: {
                                            border: '0px'
                                        }
                                    })}
                                    defaultValue={1}
                                    min={1}
                                    size="lg"
                                />
                                <Button
                                    onClick={() => setOpenModal(true)}
                                    styles={() => ({
                                        root: {
                                            backgroundColor: 'black',
                                            '&:hover': {
                                                backgroundColor: 'black'
                                            }
                                        },
                                        inner: {
                                            '& span': {
                                                color: 'white'
                                            }
                                        }
                                    })}
                                    h={54}
                                >
                                    Add to card
                                </Button>
                                {/* add to cart icon */}
                                <Button
                                    onClick={() => setFavorite(prev => !prev)}
                                    w={45}
                                    h={45}
                                    p={0}
                                    radius={'50%'}
                                    bg={favorite ? 'yellow' : 'transparent'}
                                    styles={theme => ({
                                        root: {
                                            border: `1px solid ${theme.other.colors.yellow}`,
                                            '&:hover': {
                                                backgroundColor:
                                                    theme.other.colors.yellow
                                            }
                                        }
                                    })}
                                >
                                    <Flex align={'center'} justify={'center'}>
                                        <IconHeart color="black" size={26} />
                                    </Flex>
                                </Button>
                            </Flex>
                            {/* print the product */}
                            <UnstyledButton>
                                <Flex justify="center" align="center" gap={6}>
                                    <IconPrinter size={26} color="black" />
                                    <Text fz={16} fw={400} color="black">
                                        Print this page
                                    </Text>
                                </Flex>
                            </UnstyledButton>
                        </Flex>
                    </Grid.Col>
                </Grid>

                <Flex direction="column" gap={30}>
                    {/* ====> product description */}
                    <UnstyledButton>
                        <Flex direction="column" gap={20} mt={16} w="100%">
                            <Flex
                                onClick={() =>
                                    setShowDescription(!showDescription)
                                }
                                h={74}
                                bg="black"
                                justify="space-between"
                                align="center"
                                px={30}
                            >
                                <Text
                                    fz="27px"
                                    fw="600"
                                    color="white"
                                    sx={{ userSelect: 'none' }}
                                >
                                    Product Description
                                </Text>
                                {showDescription ? (
                                    <IconMinus
                                        onClick={() =>
                                            setShowDescription(!showDescription)
                                        }
                                        cursor="pointer"
                                        color="white"
                                        size={30}
                                    />
                                ) : (
                                    <IconPlus
                                        cursor="pointer"
                                        color="white"
                                        size={30}
                                    />
                                )}
                            </Flex>
                            {showDescription && (
                                <Text
                                    fz={18}
                                    fw={400}
                                    color="black"
                                    px={30}
                                    sx={{ userSelect: 'none' }}
                                >
                                    Ideal for mobile device users wanting to
                                    take the next step with their photography,
                                    the EOS Rebel T7 camera combines fantastic
                                    features with easy-to-use operation for
                                    high-quality images you'll be proud to
                                    share. Harness the power of the EOS Rebel
                                    T7's large 24.1 Megapixel CMOS sensor to
                                    realize your potential for great shots.
                                    Share the memories with your friends and
                                    family quickly and easily via built-in
                                    Wi-FiÂ® and NFC technology. With the EOS
                                    Rebel T7's fast autofocus system, you can
                                    capture every moment as it happens, viewing
                                    each shot through the bright optical
                                    viewfinder. A range of additional features,
                                    including a large LCD screen, Full HD video
                                    recording and an on-board feature guide help
                                    you capture eye-catching photos and video.
                                </Text>
                            )}
                        </Flex>
                    </UnstyledButton>
                    {/* ====> product Specifications */}
                    <UnstyledButton>
                        <Flex direction="column" gap={20} w="100%">
                            <Flex
                                onClick={() => {
                                    setShowSpecifications(!showSpecifications);
                                }}
                                h={74}
                                bg="black"
                                justify="space-between"
                                align="center"
                                px={30}
                            >
                                <Text
                                    fz="27px"
                                    fw="600"
                                    color="white"
                                    sx={{ userSelect: 'none' }}
                                >
                                    Specifications
                                </Text>
                                {showSpecifications ? (
                                    <IconMinus
                                        onClick={() =>
                                            setShowDescription(!showDescription)
                                        }
                                        cursor="pointer"
                                        color="white"
                                        size={30}
                                    />
                                ) : (
                                    <IconPlus
                                        cursor="pointer"
                                        color="white"
                                        size={30}
                                    />
                                )}
                            </Flex>
                            {showSpecifications && (
                                <Grid mb={20}>
                                    {productSpecifications.map(
                                        (item, index) => {
                                            return (
                                                <>
                                                    <Grid.Col
                                                        span={4}
                                                        p={20}
                                                        sx={{
                                                            borderRight:
                                                                '1px solid #ADADAD',
                                                            borderBottom:
                                                                '1px solid #ADADAD'
                                                        }}
                                                    >
                                                        <Text
                                                            fz={18}
                                                            fw={600}
                                                            color="black"
                                                        >
                                                            {item.type}
                                                        </Text>
                                                    </Grid.Col>
                                                    <Grid.Col
                                                        p={20}
                                                        span={8}
                                                        sx={{
                                                            borderBottom:
                                                                '1px solid #ADADAD'
                                                        }}
                                                    >
                                                        {item.list.map(
                                                            (item, index) => {
                                                                return (
                                                                    <Text
                                                                        fz={18}
                                                                        fw={400}
                                                                        color="black"
                                                                    >
                                                                        {item}
                                                                    </Text>
                                                                );
                                                            }
                                                        )}
                                                    </Grid.Col>
                                                </>
                                            );
                                        }
                                    )}
                                </Grid>
                            )}
                        </Flex>
                    </UnstyledButton>
                </Flex>
                {/* =====> search + cart + contact us icons */}
                <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    gap={10}
                    sx={{ position: 'absolute', top: '14rem', right: '20px' }}
                >
                    {iconsBar.map((item, index) => {
                        return (
                            <UnstyledButton>
                                <Flex
                                    key={index}
                                    justify="center"
                                    align="center"
                                    w={50}
                                    h={50}
                                    bg={theme.other.colors.yellow}
                                    sx={{ borderRadius: '50%' }}
                                >
                                    {item.icon}
                                </Flex>
                            </UnstyledButton>
                        );
                    })}
                </Flex>
            </Container>

            {/* ====> Ask our expert */}
            <Box w="100%" bg="#F5F5F5" h={200} my={80}>
                <Flex
                    direction="column"
                    h="100%"
                    justify="center"
                    align="center"
                    gap={20}
                >
                    <Text fz={27} fw={600} color="black">
                        Not sure if this item is right for you?{' '}
                    </Text>
                    <Link
                        href="#"
                        style={{
                            width: '230px',
                            height: '54px',
                            background: '#FDB602',
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: '700',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textDecoration: 'none'
                        }}
                    >
                        ASK OUR EXPERTS
                    </Link>
                </Flex>
            </Box>

            {/* ===> related products */}
            <Container size="xl">
                <Text fz={45} fw={600} lh={0} color="black" align="center">
                    Related Products
                </Text>
                <Grid my={60}>
                    {[0, 1, 2, 3].map((item, index) => {
                        return (
                            <Grid.Col key={index} sm={4} xl={3}>
                                <ProductCard />
                            </Grid.Col>
                        );
                    })}
                </Grid>
            </Container>

            <ModalWrapper open={openModal} setState={setOpenModal}>
                <Grid>
                    <Grid.Col span={7} p={40}>
                        <Flex direction="column" align="flex-start" gap={20}>
                            <Text fz={23} lh="32px" fw={600} color="black">
                                Item added to your cart!{' '}
                            </Text>
                            <Grid gutter={16}>
                                <Grid.Col span={5}>
                                    <Box
                                        w="100%"
                                        h={200}
                                        sx={{
                                            position: 'relative',
                                            border: '2px solid black'
                                        }}
                                    >
                                        <Image
                                            src="/productImage.png"
                                            fill
                                            className="object-contain"
                                            alt=""
                                        />
                                    </Box>
                                </Grid.Col>
                                <Grid.Col span={7}>
                                    <Flex
                                        direction="column"
                                        align="flex-start"
                                        gap={17}
                                    >
                                        <Text fz={18} fw={500} color="black">
                                            Canon EOS Rebel T7 24.1 Megapixel
                                            Digital SLR Camera with Lens - 18 mm
                                            - 55 mm (Lens 1), 75 mm - 300 mm
                                            (Lens 2)
                                        </Text>
                                        {/* price */}
                                        <Flex
                                            justify="center"
                                            gap={10}
                                            align="center"
                                        >
                                            <Text
                                                fz={22}
                                                fw={500}
                                                color="black"
                                            >
                                                $499.99
                                            </Text>
                                            <Text
                                                fz={16}
                                                fw={400}
                                                color="black"
                                            >
                                                ORIGINAL $599.99
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Grid.Col>
                            </Grid>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={5} p={40} bg="#F7F7F7">
                        <Flex
                            direction="column"
                            gap={18}
                            justify="center"
                            align="flex-start"
                        >
                            <Text fz={23} lh="32px" fw={600} color="black">
                                Cart Details
                            </Text>
                            {/* =====> subTotal */}
                            <Flex
                                w="100%"
                                justify="space-between"
                                align="center"
                                pb={10}
                                sx={{ borderBottom: '1px solid black' }}
                            >
                                <Text
                                    fz={18}
                                    fw={500}
                                    color="black"
                                    tt="uppercase"
                                >
                                    Subtotal:{' '}
                                </Text>
                                <Text fz={18} fw={500} color="black">
                                    $499.99
                                </Text>
                            </Flex>
                            {/* zib code */}
                            <Flex
                                w="100%"
                                direction="column"
                                pb={16}
                                sx={{ borderBottom: '1px solid black' }}
                            >
                                <Flex
                                    w="100%"
                                    justify="space-between"
                                    align="center"
                                    px={20}
                                    h={52}
                                    bg="white"
                                >
                                    <Text fz={18} fw={400} color="black">
                                        Zip Code
                                    </Text>
                                    <UnstyledButton>
                                        <IconX color="black" size={26} />
                                    </UnstyledButton>
                                </Flex>
                            </Flex>
                            {/* est shipping */}
                            <Flex
                                w="100%"
                                justify="space-between"
                                align="center"
                            >
                                <Text
                                    fz={18}
                                    fw={400}
                                    color="black"
                                    tt="uppercase"
                                >
                                    Est. Shipping:
                                </Text>
                                <Text fz={18} fw={400} color="black">
                                    TBD
                                </Text>
                            </Flex>
                            {/* est taxes */}
                            <Flex
                                w="100%"
                                pb={20}
                                justify="space-between"
                                align="center"
                                sx={{ borderBottom: '1px solid black' }}
                            >
                                <Text
                                    fz={18}
                                    fw={400}
                                    color="black"
                                    tt="uppercase"
                                >
                                    Est. Taxes & Fees
                                </Text>
                                <Text fz={18} fw={400} color="black">
                                    TBD
                                </Text>
                            </Flex>
                            {/* Est. Total:  */}
                            <Flex
                                w="100%"
                                justify="space-between"
                                align="center"
                            >
                                <Text
                                    fz={18}
                                    fw={700}
                                    color="black"
                                    tt="uppercase"
                                >
                                    Est. Total:
                                </Text>
                                <Text fz={18} fw={700} color="black">
                                    $499.99
                                </Text>
                            </Flex>
                            {/* ===> procedd to checkout + continoue shopping button */}
                            <Flex
                                w="100%"
                                direction="column"
                                gap={14}
                                mt={26}
                                justify="center"
                                align="center"
                            >
                                <Button
                                    h={54}
                                    w="100%"
                                    styles={() => ({
                                        root: {
                                            backgroundColor: '#FDB602',
                                            '&:hover': {
                                                backgroundColor: '#FDB602'
                                            }
                                        },
                                        inner: {
                                            '& span': {
                                                color: 'black'
                                            }
                                        }
                                    })}
                                >
                                    PROCEED TO CART
                                </Button>
                                <Button
                                    h={54}
                                    w="100%"
                                    styles={() => ({
                                        root: {
                                            backgroundColor: 'black',
                                            '&:hover': {
                                                backgroundColor: 'black'
                                            }
                                        },
                                        inner: {
                                            '& span': {
                                                color: 'white'
                                            }
                                        }
                                    })}
                                >
                                    CONTINUE SHOPPING
                                </Button>
                            </Flex>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </ModalWrapper>
        </React.Fragment>
    );
};

const productSpecifications = [
    {
        type: 'General Information',
        list: [
            'Manufacturer: Canon, Inc ',
            'Brand Name: Canon',
            'Product Line: EOS Rebel',
            'Product Model: T7',
            'Product Type: Digital SLR Camera with Lens'
        ]
    },
    {
        type: 'Display & Graphics',
        list: [
            'Screen Size: 3',
            'Display Screen Type: LCDT',
            'ouchscreen: No',
            'Effective Camera Resolution: 24.1 Megapixel',
            'Sensor Size: 0.88 x 0.59'
        ]
    },
    {
        type: 'Image',
        list: [
            'Screen Size: 3',
            'Display Screen Type: LCDT',
            'ouchscreen: No',
            'Effective Camera Resolution: 24.1 Megapixel',
            'Sensor Size: 0.88 x 0.59'
        ]
    },
    {
        type: 'General Information',
        list: [
            'Manufacturer: Canon, Inc ',
            'Brand Name: Canon',
            'Product Line: EOS Rebel',
            'Product Model: T7',
            'Product Type: Digital SLR Camera with Lens'
        ]
    },
    {
        type: 'Display & Graphics',
        list: [
            'Screen Size: 3',
            'Display Screen Type: LCDT',
            'ouchscreen: No',
            'Effective Camera Resolution: 24.1 Megapixel',
            'Sensor Size: 0.88 x 0.59'
        ]
    },
    {
        type: 'Image',
        list: [
            'Screen Size: 3',
            'Display Screen Type: LCDT',
            'ouchscreen: No',
            'Effective Camera Resolution: 24.1 Megapixel',
            'Sensor Size: 0.88 x 0.59'
        ]
    }
];

const serviceArguments = [
    {
        label: '3 Year Standard Worldwide - $46.99'
    },
    {
        label: '3 Year Diamond Accidental Damage - $93.99'
    },
    {
        label: 'None'
    }
];

const iconsBar = [
    {
        icon: <IconSearch />
    },
    {
        icon: <IconShoppingBag />
    },
    {
        icon: <IconPhoneCall />
    }
];

export default ProductDescription;
