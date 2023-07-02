import React, { useState } from "react";
import {
  Box,
  Text,
  Group,
  Button,
  useMantineTheme,
  BackgroundImage,
  Flex,
} from "@mantine/core";
import Image from "next/image";
import { IconHeart } from "@tabler/icons-react";
import Link from "next/link";

const ProductCard = () => {
  const theme = useMantineTheme();
  const [favorite, setFavorite] = useState(false);

  return (
    <Flex
      direction={"column"}
      gap={14}
      justify={"center"}
      align={"center"}
      w={"100%"}
      p={20}
      pos={"relative"}
      sx={{
        border: "2px solid black",
      }}
    >
      <Box w={280} h={150} mt={30} pos={"relative"}>
        <Image
          src="/productImage.png"
          fill
          alt=""
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Text fz={18} fw={700} color="black">
        Canon EOS Rebel T7 24.1 Megapixel Digital SLR Camera with Lens - 18 mm -
        55 mm
      </Text>
      <Flex align={"start"} direction={"column"} w={"100%"} mt={8}>
        {/* price */}
        <Text fz={22} fw={700} color={theme.other.colors.yellow}>
          $429.99
        </Text>
        {/* ==> delivery */}
        <Text fz={14} fw={400} color="black">
          Free Shipping
        </Text>
        {/* add to cart + favorite  */}
        <Flex justify={"start"} align={"center"} gap={14} mt={14}>
          <Link
            href="/product-description"
            style={{
              textTransform: "uppercase",
              textDecoration: "none",
              width: "145px",
              height: "45px",
              background: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            Add to card
          </Link>
          {/* add to cart icon */}
          <Button
            onClick={() => setFavorite((prev) => !prev)}
            w={45}
            h={45}
            p={0}
            radius={"50%"}
            bg={favorite ? "yellow" : "transparent"}
            styles={(theme) => ({
              root: {
                border: `1px solid ${theme.other.colors.yellow}`,
                "&:hover": { backgroundColor: theme.other.colors.yellow },
              },
            })}
          >
            <Flex align={"center"} justify={"center"}>
              <IconHeart color="black" size={26} />
            </Flex>
          </Button>
        </Flex>
      </Flex>
      {/* ===> sale badge */}
      <BackgroundImage
        src="/badge.png"
        h={45}
        w={115}
        pos={"absolute"}
        top={18}
        left={-2}
        bgsz={"contain"}
        bgp={"center"}
      >
        <Flex justify={"center"} align={"center"}>
          <Text fz={27} tt="uppercase" fw={600}>
            Sale
          </Text>
        </Flex>
      </BackgroundImage>
    </Flex>
  );
};

export { ProductCard };
