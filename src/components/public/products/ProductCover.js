import React, { useState } from "react";
import history from "../../../history";
import {
  Box,
  AspectRatio,
  Image,
  Text,
  Flex,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { BiHeart, BsHeartFill } from "react-icons/bi";
const ProductCover = (props) => {
  //get products props
  const { id, name, standardPrice, salesPrice, solid = 0, coverImage } = props;

  const [showHeart, setShowHeart] = useState(false);
  return (
    <>
      <Box
        onMouseEnter={() => setShowHeart(true)}
        onMouseLeave={() => setShowHeart(false)}
        position="relative"
        cursor="pointer"
        maxW="300px"
        onClick={() => history.push(`/products/10`)}
        bg="white"
      >
        <AspectRatio height="200" ratio={{ base: 16 / 9, md: 1 }}>
          <Image src="https://images.pexels.com/photos/9980077/pexels-photo-9980077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </AspectRatio>
        <Flex
          borderBottomWidth={1}
          borderLeftWidth={1}
          borderRightWidth={1}
          borderColor={"gray.200"}
          justifyContent="space-between"
          direction="column"
          px="2"
          py="1"
        >
          <Text fontWeight="medium" fontSize="15">
            Lorem isum
          </Text>
          <Flex fontSize="14" w={"100%"} justifyContent={"space-between"}>
            <Text>100</Text>
            <Text>Solid 10</Text>
          </Flex>
        </Flex>
        {showHeart && (
          <Box
            bg="orange"
            p="1"
            zIndex="10"
            position="absolute"
            top="2"
            left="2"
          >
            <BiHeart color="white" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProductCover;
