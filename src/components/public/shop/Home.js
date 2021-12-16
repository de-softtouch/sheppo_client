import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCover from "../products/ProductCover";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Home = () => {
  return (
    <Flex w="100%" direction={"column"}>
      <Box bg="white" p="5">
        <Heading fontSize="large">About Shop</Heading>
        <Box m="5" />
        <Flex direction="row">
          <Box flex="5" w="600px" maxW="600px">
            <Slider {...settings}>
              {[
                "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                "https://images.pexels.com/photos/6311650/pexels-photo-6311650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                "https://images.pexels.com/photos/6787007/pexels-photo-6787007.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              ].map((item, i) => (
                <Image
                  key={i}
                  objectFit={"cover"}
                  boxSize="300px"
                  src={item}
                  alt="Dan Abramov"
                />
              ))}
            </Slider>
          </Box>
          <Box flex="5" align="start">
            <Container>Description</Container>
          </Box>
        </Flex>
      </Box>
      {/* TOP PRODUCTS */}
      <Box>
        <Box>
          <Heading py="5" size="x-large">
            Top Products
          </Heading>
          <SimpleGrid columns={[2, 4, 6]} spacing="2">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <ProductCover />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      {/* TOP PRODUCTS */}
    </Flex>
  );
};

export default Home;
