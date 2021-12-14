import React from "react";
import { Spinner, Center, Box } from "@chakra-ui/react";
function LoaderProgress() {
  return (
    <>
      <Center>
        <Box
          w="100wv"
          h="100vh"
          position="absolute"
          top="50%"
          right="50%"
          zIndex="9999"
        />
        <Spinner size="md" />
      </Center>
    </>
  );
}

export default LoaderProgress;
