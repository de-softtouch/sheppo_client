import React from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  SimpleGrid,
  Divider,
  Text,
  ButtonGroup,
  Select,
  Button,
} from "@chakra-ui/react";
import ProductCover from "../products/ProductCover";
const Products = () => {
  return (
    <Box bg="gray.100" w="100%">
      <Flex w="100%" m="auto">
        <Box flex="2" bg="white" p="5">
          <VStack align="start">
            <Text fontSize="large" fontWeight="medium">
              Shop Category
            </Text>
            <VStack>
              <Box>
                <Text color="gray.500">Category</Text>
                <Divider />
              </Box>
            </VStack>
          </VStack>
        </Box>
        <Box mx="2" />
        <Box p="5" bg="white" flex="10">
          <VStack w="100%">
            <Flex w="100%" pb="4">
              <HStack align="start">
                <Text minW="100px">Sort by</Text>
                <ButtonGroup size="sm" colorScheme="orange" variant="outline">
                  <Button variant="solid">Latest</Button>
                  <Button>Top Sales</Button>
                </ButtonGroup>
                <Select size="sm" placeholder="Price">
                  <option>Low to High</option>
                  <option>High To Low</option>
                </Select>
              </HStack>
            </Flex>
            <Box w="100%">
              <SimpleGrid columns={[2, 4, 6]} spacing="2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                  <ProductCover key={i} />
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Products;
