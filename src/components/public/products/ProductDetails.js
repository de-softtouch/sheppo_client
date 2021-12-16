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
  useDisclosure,
  Icon,
  Modal,
  SimpleGrid,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ButtonGroup,
  Avatar,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Slider from "react-slick";
import {
  AddIcon,
  CheckIcon,
  MinusIcon,
  PhoneIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  AiOutlineHeart,
  BsSubtract,
  AiOutlineShoppingCart,
} from "react-icons/all";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../states/action_creators/cartCreator";
import RatedStart from "./RatedStart";
import history from "../../../history";
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
  const dispatch = useDispatch();
  const [selectProduct, setSelectProduct] = useState({
    qty: 1,
  });

  const { id } = useParams();
  const handleAddToCart = () => {
    dispatch(addToCart(id));
    onOpen();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    document.title = "Product Details";
    // window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Flex direction="column" bg="gray.100" w={"100%"} minH={"100vh"}>
        <Flex w={"100%"} bg="gray.100" p="5">
          <Box p="5" flex={5} bg="white" w={"100%"}>
            <VStack align={"start"} spacing={5} w={"100%"}>
              <VStack spacing={2} w={"100%"}>
                {/* RATING */}
                <RatedStart id={100} />
                {/* RATING */}
              </VStack>
              {/* NAME */}
              <Heading fontSize={"xx-large"} textColor={"gray.700"}>
                Product Name
              </Heading>
              {/* NAME */}

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
                alignItems={"center"}
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
                <VStack align={"start"} maxW={"120px"}>
                  <Text>Quantity</Text>
                  <InputGroup size="sm">
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
                  size="sm"
                  colorScheme={"blue"}
                  variant={"outline"}
                  aria-label={""}
                  rightIcon={<AiOutlineHeart />}
                >
                  Add to favorite
                </Button>
              </Flex>
              <Box w="100%">
                <Button
                  onClick={() => handleAddToCart()}
                  w="100%"
                  variant="solid"
                  bg="gray.700"
                  color="white"
                  rightIcon={<AiOutlineShoppingCart />}
                >
                  Add to Cart
                </Button>
              </Box>
              {/*END OF QUANTITY*/}
            </VStack>
          </Box>
          {/* IMAGES */}
          <Box flex={7} bg={"white"} p="5" pl="10">
            <Flex w={"100%"}>
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
                    src="https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Dan Abramov"
                  />
                </AspectRatio>
              </Box>
              <Box flex={2}></Box>
            </Flex>
          </Box>
          {/* END OF IMAGES */}
        </Flex>
        {/* SHOP INFO */}
        <Box mx="5">
          <Box p="5" bg="white" w="100%">
            <HStack w="100%" spacing={6}>
              <Avatar
                size="xl"
                name="shop avatar"
                src="https://images.pexels.com/photos/10311051/pexels-photo-10311051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <VStack align={"start"}>
                <Text color="orange" fontWeight="medium" fontSize="large">
                  NKD
                </Text>
                <Text>Active 25m ago</Text>
                <ButtonGroup size="sm">
                  <Button>Chat</Button>
                  <Button
                    onClick={() => {
                      history.push("/shop");
                    }}
                    variant="outline"
                  >
                    View Shop
                  </Button>
                </ButtonGroup>
              </VStack>
              <Divider minH="80px" mx="10" px="10" orientation="vertical" />
              <SimpleGrid columns="3" spacing="5">
                {[1, 2, 3, 3, 3, 3].map((item, i) => (
                  <HStack>
                    <Text color="gray.700">Ratings</Text>
                    <Text color="orange">3,8k</Text>
                  </HStack>
                ))}
              </SimpleGrid>
              {/* SHOP INFO */}
            </HStack>
          </Box>
        </Box>
        {/*END OF SHOP INFO */}
        {/* DESCRIPTION */}
        <Flex bg="white" direction="column" p="5" m={5}>
          <Heading fontSize={"large"}>Description</Heading>
          <Divider my="5" />
          {/*END OF DESCRIPTION*/}
          <Skeleton isLoaded={true}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet turpis vitae est porta feugiat. Nunc in sapien interdum,
              condimentum arcu eget, tempus urna. Quisque vel erat in est
              fermentum posuere nec eu urna.
            </Text>
          </Skeleton>
        </Flex>
        {/*RELATED PRODUCT*/}
        <Box bg="white" p={5} m="5">
          <Flex justifyContent={"start"} direction="column">
            <Heading fontSize={"large"}>Related Products</Heading>
            <Divider my="5" />
            <HStack></HStack>
          </Flex>
        </Box>
        {/* RATINGS SECTION */}
        <Box bg="white" p={5} m="5">
          <Heading fontSize={"large"}>Product Ratings</Heading>
          {/* FILTER */}
          <HStack my="5" spacing={10} bg="gray.200" p="5">
            <VStack align="start">
              <Text>4 out of 5</Text>
              <HStack align="start">
                {[1, 2, 3, 4, 5].map((item, i) => (
                  <Icon boxSize="18px" as={StarIcon} key={i} />
                ))}
              </HStack>
            </VStack>
            <ButtonGroup size="sm" variant="outline">
              <Wrap maxW="800px">
                {[1, 1, 1, 1, , 1, 1, 1, 1].map((item, i) => (
                  <WrapItem key={i}>
                    <Button>5 Starts</Button>
                  </WrapItem>
                ))}
              </Wrap>
            </ButtonGroup>
          </HStack>
          {/* END OF RATINGS FILTER */}
          <VStack align="start">
            {[1, 2, 3, 4, 5].map((item, i) => (
              <HStack key="i" align="start">
                <Avatar
                  src="https://images.pexels.com/photos/9873868/pexels-photo-9873868.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  size="sm"
                />
                <VStack align="start">
                  <Text fontWeight="medium">Mia Nguyen</Text>
                  <HStack align="start">
                    {[1, 2, 3, 4, 5].map((item, i) => (
                      <Icon boxSize="10px" as={StarIcon} key={i} />
                    ))}
                  </HStack>
                  <Text>Amazing good job!</Text>
                  <HStack></HStack>
                  <HStack>
                    {[1, 2, 3].map((item, i) => (
                      <Image
                        boxSize="80px"
                        objectFit="cover"
                        src="https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="img"
                      />
                    ))}
                  </HStack>
                  <Text fontSize="small" color="gray.400">
                    2021-11-29 07:54
                  </Text>
                  <Divider />
                </VStack>
              </HStack>
            ))}
          </VStack>
        </Box>
        {/* RATINGS SECTION */}
      </Flex>
      {/* MODAL */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>THIS IS MODEL BNOHFAHFIDKHFKSDHFKSHDF</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={() => history.push("/cart")} variant="ghost">
              Cart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductDetails;
