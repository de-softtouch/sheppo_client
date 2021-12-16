import React, { useEffect } from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Flex,
  Heading,
  AspectRatio,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import LoaderProgress from "../common/LoaderProgress";
import { fetchNewestProducts } from "../../../states/action_creators/entitiesCreator";
import history from "../../../history";
import ProductCover from "../products/ProductCover";
function NewestProducts() {
  const isFetching = useSelector((state) => state.entities.isFetching);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.newestProducts);
  useEffect(() => {
    dispatch(fetchNewestProducts());
  }, []);
  const mockData = [
    {
      id: 1,
      name: "Lorem",
      coverImage:
        "https://images.pexels.com/photos/9980077/pexels-photo-9980077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      standardPrice: 100,
      salesPrice: 95,
      solid: 10,
    },
    {
      id: 2,
      name: "Lorem is sum 1",
      coverImage:
        "https://images.pexels.com/photos/9980077/pexels-photo-9980077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      standardPrice: 100,
      salesPrice: 95,
      solid: 10,
    },
    {
      id: 3,
      name: "Lorem 12",
      coverImage:
        "https://images.pexels.com/photos/9980077/pexels-photo-9980077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      standardPrice: 100,
      salesPrice: 95,
      solid: 10,
    },
    {
      id: 4,
      name: "Lorem 42",
      coverImage:
        "https://images.pexels.com/photos/9980077/pexels-photo-9980077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      standardPrice: 100,
      salesPrice: 95,
      solid: 10,
    },
    {
      id: 5,
      name: "Lorem 1",
      coverImage:
        "https://images.pexels.com/photos/9980077/pexels-photo-9980077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      standardPrice: 100,
      salesPrice: 95,
      solid: 10,
    },
  ];
  return (
    <>
      {/* {isFetching ? (
        <LoaderProgress />
      ) : ( */}
      <Flex mb="5" alignItems="center" w="100%" justifyContent="space-between">
        <Heading fontWeight="medium" fontSize="x-large" color="gray.700">
          For you
        </Heading>
        <Text
          cursor={"pointer"}
          _hover={{
            textDecoration: "underline",
            color: "blue.500",
          }}
        >
          More
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 2, md: 6 }} spacing={2}>
        {/* {products &&
            products.map((p, i) => ( */}
        {mockData &&
          mockData.map((p, i) => (
            <ProductCover {...p} key={i} />
            // <Box
            //   onClick={() => history.push(`/products/${p.id}`)}
            //   key={i}
            //   bg="white"
            // >
            //   <AspectRatio height="200" ratio={{ base: 16 / 9, md: 1 }}>
            //     <Image src="https://images.pexels.com/photos/9980077/pexels-photo-9980077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            //   </AspectRatio>
            //   <Flex
            //     justifyContent="space-between"
            //     direction="column"
            //     px="2"
            //     py="1"
            //   >
            //     <Text fontWeight="medium" fontSize="15">
            //       {p.name}
            //     </Text>
            //     <Flex fontSize="14" w={"100%"} justifyContent={"space-between"}>
            //       <Text>{p.standardPrice}</Text>
            //       <Text>Solid 10</Text>
            //     </Flex>
            //   </Flex>
            // </Box>
          ))}
      </SimpleGrid>
      {/* )} */}
    </>
  );
}

export default NewestProducts;
