import React, { useEffect } from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import LoaderProgress from "../common/LoaderProgress";
import { fetchNewestProducts } from "../../../states/action_creators/entitiesCreator";
import history from "../../../history";
function NewestProducts() {
  const isFetching = useSelector((state) => state.entities.isFetching);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.newestProducts);
  useEffect(() => {
    dispatch(fetchNewestProducts());
  }, []);
  return (
    <>
      {isFetching ? (
        <LoaderProgress />
      ) : (
        <SimpleGrid columns={{ base: 2, md: 6 }} spacing={2}>
          {products &&
            products.map((p, i) => (
              <Box
                onClick={() => history.push("/products/1")}
                key={i}
                bg="white"
              >
                <AspectRatio height="200" ratio={{ base: 16 / 9, md: 1 }}>
                  <Image src="https://images.pexels.com/photos/9980077/pexels-photo-9980077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </AspectRatio>
                <Flex
                  justifyContent="space-between"
                  direction="column"
                  px="2"
                  py="1"
                >
                  <Text fontWeight="medium" fontSize="15">
                    {p.name}
                  </Text>
                  <Flex
                    fontSize="14"
                    w={"100%"}
                    justifyContent={"space-between"}
                  >
                    <Text>{p.standardPrice}</Text>
                    <Text>Solid 10</Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default NewestProducts;
