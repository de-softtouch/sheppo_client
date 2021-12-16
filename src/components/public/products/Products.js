import React from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  Select,
  Text,
  SimpleGrid,
  CheckboxGroup,
  Checkbox,
  Divider,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductCover from "./ProductCover";
const Products = () => {
  const [priceFilter, setPriceFilter] = useState({
    minPrice: 0,
  });
  return (
    <Box minH="100vh" p="5">
      <Flex>
        <Box p="4" flex="2">
          <VStack w={"100%"} spacing="5" align="start">
            <VStack w={"100%"} align={"start"}>
              <Text color="gray.800" fontWeight={"medium"} fontSize="large">
                Gender
              </Text>
              <Divider />
              <CheckboxGroup colorScheme="orange" size="md">
                {["men", "women", "unisex"].map((item, i) => (
                  <HStack key={i}>
                    <Checkbox textTransform={"capitalize"}>{item}</Checkbox>
                    <Text color="gray.500">(30)</Text>
                  </HStack>
                ))}
              </CheckboxGroup>
            </VStack>
            <VStack w={"100%"} align={"start"}>
              <Text color="gray.800" fontWeight={"medium"} fontSize="large">
                Price
              </Text>
              <Divider />
              <Flex w={"100%"} justifyContent="space-between">
                <Input size="sm" value={10} />
                <Box w="60px" />
                <Input size="sm" value={100} />
              </Flex>
              <RangeSlider
                defaultValue={[120, 240]}
                min={0}
                max={300}
                step={30}
              >
                <RangeSliderTrack bg="red.100">
                  <RangeSliderFilledTrack bg="tomato" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={4} index={0} />
                <RangeSliderThumb boxSize={4} index={1} />
              </RangeSlider>
            </VStack>
            <VStack w={"100%"} align={"start"}>
              <Text color="gray.800" fontWeight={"medium"} fontSize="large">
                Gender
              </Text>
              <Divider />
              <CheckboxGroup colorScheme="orange" size="md">
                {["men", "women", "unisex"].map((item, i) => (
                  <HStack key={i}>
                    <Checkbox textTransform={"capitalize"}>{item}</Checkbox>
                    <Text color="gray.500">(30)</Text>
                  </HStack>
                ))}
              </CheckboxGroup>
            </VStack>
          </VStack>
        </Box>
        <Box minH="100vh" flex="10" w="100%">
          <Flex w="100%" direction="column">
            {/* FILTER */}
            <Flex
              w={"100%"}
              justifyContent={"space-between"}
              alignItems="center"
              p="4"
            >
              <HStack alignItems="center">
                <Heading fontSize="x-large" color="gray.800">
                  Watches
                </Heading>
                <Text fontSize="large" color="gray.600">
                  (300 products)
                </Text>
              </HStack>
              <HStack justifyContent="space-around" spacing={2}>
                <Text w="100px">Sort By</Text>
                <Select>
                  <option>Best Seller</option>
                  <option>Price</option>
                </Select>
              </HStack>
            </Flex>
            {/* PRODUCTS */}
            <Box
              borderColor={"gray.200"}
              borderWidth={3}
              borderRadius="md"
              p="4"
              borderStyle={"dashed"}
              minH="100vh"
            >
              <SimpleGrid columns={[2, 3, 4]} spacing="5">
                {[1, 1, 1, 1, 1, 1, , 1, 1, 1].map((item, i) => (
                  <ProductCover key={i} />
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Products;
