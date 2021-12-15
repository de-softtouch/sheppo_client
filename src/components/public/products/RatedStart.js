import { Heading, HStack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React from "react";
{
  /* <HStack spacing={2} w={"100%"}>
<Text color={"blue.500"}>Rating</Text>
<HStack spacing={1}>
  {[1, 2, 3, 4, 5].map((item, i) => (
    <StarIcon
      key={i}
      color={i < 3 ? "orange.200" : "gray.200"}
    />
  ))}
</HStack>
</HStack> */
}
const RatedStart = ({ id }) => {
  return (
    <>
      <HStack spacing={2} w={"100%"}>
        <Text color={"blue.500"}>Rating</Text>
        <HStack spacing={1}>
          {[1, 2, 3, 4, 5].map((item, i) => (
            <StarIcon key={i} color={i < 3 ? "orange.200" : "gray.200"} />
          ))}
        </HStack>
      </HStack>
    </>
  );
};

export default RatedStart;
