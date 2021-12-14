import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Divider,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
const Password = () => {
  return (
    <VStack spacing="5" align="start">
      <Flex alignItems="center" w="100%" justifyContent="space-between">
        <Flex direction="column" alignItems="start">
          <Text>Password</Text>
          <Text>Change password to secure account</Text>
        </Flex>
        <Text>Forgot password?</Text>
      </Flex>

      <Divider />

      <VStack spacing="5" align="start" w="300px" w="90%" maxW="400">
        <FormControl id="current-password">
          <FormLabel>Current Passsword</FormLabel>
          <Input type="password" />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl id="new-password">
          <FormLabel>New Password</FormLabel>
          <Input type="password" />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl id="repeat-new-password">
          <FormLabel>Repeat New Password</FormLabel>
          <Input type="password" />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <Button>Save</Button>
      </VStack>
    </VStack>
  );
};

export default Password;
