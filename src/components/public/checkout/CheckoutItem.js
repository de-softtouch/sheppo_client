import React from "react";
import {
  AspectRatio,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
} from "@chakra-ui/react";

const CheckoutItem = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
        <HStack spacing={2}>
          <AspectRatio w={100} ratio={1}>
            <Image
              borderRadius={"md"}
              src={
                "https://images.pexels.com/photos/277290/pexels-photo-277290.jpeg?cs=srgb&dl=pexels-pixabay-277290.jpg&fm=jpg"
              }
              alt={"cart dstem"}
            />
          </AspectRatio>

          <VStack align={"start"}>
            <Text fontSize={20} textColor={"gray.600"} fontWeight={"medium"}>
              Watch
            </Text>
            <Text fontSize={15} color={"grey"}>
              Size : 20
            </Text>
            <Text fontSize={15} textColor={"gray.600"}>
              Size : 20
            </Text>
          </VStack>
        </HStack>
        <NumberInput maxW={20} step={1} defaultValue={1} min={1} max={100}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text textColor={"gray.700"} fontWeight={"medium"} fontSize={"x-large"}>
          120$
        </Text>
      </Flex>
    </>
  );
};

export default CheckoutItem;
