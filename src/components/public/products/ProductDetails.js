import React, { useEffect, useState } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Circle,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Skeleton,
  Square,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import {
  AddIcon,
  CheckIcon,
  MinusIcon,
  PhoneIcon,
  StarIcon,
} from "@chakra-ui/icons";
import { AiOutlineHeart, BsSubtract } from "react-icons/all";

const setting = {
  // dots: true,
  // infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  vertical: true,
  arrows: false,
  verticalSwiping: true,
  beforeChange: function (currentSlide, nextSlide) {
    console.log("before change", currentSlide, nextSlide);
  },
  afterChange: function (currentSlide) {
    console.log("after change", currentSlide);
  },
};
const ProductDetails = () => {
  const [selectProduct, setSelectProduct] = useState({
    qty: 1,
  });

  useEffect(() => {
    document.title = "Product Details";
  }, []);
  return (
    <Box minH={"100vh"} bg={"white"} bgColor={"gray.100"}>
      <Flex w={"100%"} minH={"100vh"}>
        <Box flex={5} w={"100%"} bg={"white"}>
          <VStack align={"start"} spacing={5} p={10} w={"100%"} bg={"white"}>
            <VStack spacing={2} w={"100%"}>
              <HStack spacing={2} w={"100%"} alignItems={"center"}>
                <Text color={"blue.500"}>Rating</Text>
                <HStack spacing={1} alignItems={"center"}>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <StarIcon
                      key={i}
                      color={i < 3 ? "orange.200" : "gray.200"}
                    />
                  ))}
                </HStack>
              </HStack>
            </VStack>
            <Heading fontSize={"xx-large"} textColor={"gray.700"}>
              Product Name
            </Heading>
            <HStack spacing={2}>
              <Text textDecoration={"line-through"} color={"gray.800"}>
                $100
              </Text>
              <Text fontSize={"x-large"} color={"red"} fontWeight={"medium"}>
                $90
              </Text>
            </HStack>
            <Text textColor={"gray.500"}>Lorem ipsum dolor sit amet.</Text>
            {/*COLOR && SIZE*/}
            <Flex
              w={"100%"}
              justifyContent={"space-between"}
              alignItem={"center"}
            >
              <VStack align={"start"}>
                <Text>Size</Text>
                <HStack w={"100%"}>
                  {[1, 2, 3].map((item, i) => (
                    <Square
                      key={i}
                      borderColor={"gray.500"}
                      align={"center"}
                      alignContent={"center"}
                      alignItems={"center"}
                      w={"35px"}
                      h={"35px"}
                      _hover={{
                        background: "teal",
                        color: "white",
                      }}
                      cursor={"pointer"}
                      borderWidth={1}
                      p={2}
                      borderRadius={"md"}
                    >
                      <Square w={"100%"} h={"100%"} p={0} m={0}>
                        32
                      </Square>
                    </Square>
                  ))}
                </HStack>
              </VStack>
              <VStack align={"start"}>
                <Text>Color</Text>
                <HStack>
                  {["red", "teal", "yellow"].map((item, i) => (
                    <Circle
                      _hover={{
                        background: "gray.200",
                      }}
                      borderRadius={"35px"}
                      borderWidth={2}
                      borderColor={"gray.500"}
                      size="35px"
                      color="white"
                    >
                      <Circle
                        bg={item}
                        w={"26px"}
                        h={"26px"}
                        borderRadius={"100px"}
                        m={1}
                      >
                        {/*<PhoneIcon/>*/}
                      </Circle>
                    </Circle>
                  ))}
                </HStack>
              </VStack>
            </Flex>
            {/*END OF COLOR && SIZE*/}
            {/*QUANTITY*/}
            <Flex
              justifyContent={"space-between"}
              alignItems={"end"}
              w={"100%"}
              align={"start"}
            >
              <VStack align={"start"} maxW={"200px"}>
                <Text>Quantity</Text>
                <InputGroup>
                  <InputLeftAddon
                    onClick={() => {
                      setSelectProduct((prevState) => ({
                        ...prevState,
                        qty: prevState.qty >= 1 && prevState.qty - 1,
                      }));
                    }}
                    cursor={"pointer"}
                    children={<MinusIcon />}
                  />
                  <Input
                    onChange={(e) => {
                      if (e.target.value >= 1) {
                        setSelectProduct((prevState) => ({
                          ...prevState,
                          qty: parseInt(e.target.value),
                        }));
                      }
                    }}
                    value={selectProduct.qty}
                    type="number"
                  />
                  <InputRightAddon
                    onClick={() => {
                      setSelectProduct((prevState) => ({
                        ...prevState,
                        qty: prevState.qty + 1,
                      }));
                    }}
                    cursor={"pointer"}
                    children={<AddIcon />}
                  />
                </InputGroup>
              </VStack>
              <Button
                colorScheme={"blue"}
                variant={"outline"}
                aria-label={""}
                rightIcon={<AiOutlineHeart />}
              >
                Add to favorite
              </Button>
            </Flex>
            {/*END OF QUANTITY*/}
            {/*DESCRIPTION*/}
            <Divider />
            {/*END OF DESCRIPTION*/}
            <Skeleton isLoaded={true}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sit amet turpis vitae est porta feugiat. Nunc in sapien
                interdum, condimentum arcu eget, tempus urna. Quisque vel erat
                in est fermentum posuere nec eu urna.
              </Text>
            </Skeleton>
          </VStack>
        </Box>
        <Box flex={7} bg={"white"}>
          <Flex w={"100%"} p={10}>
            <Box flex={10}>
              <AspectRatio maxW="450px" ratio={1}>
                {/* <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  allowFullScreen
                /> */}
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </AspectRatio>
            </Box>
            <Box flex={2}></Box>
          </Flex>
        </Box>
      </Flex>
      {/*RELATED PRODUCT*/}
      <Box p={10} w={"100%"} bg={"white"}>
        <Flex w={"100%"} justifyContent={"start"}>
          <Heading fontSize={"xx-large"}>Related Products</Heading>
          <HStack></HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductDetails;
