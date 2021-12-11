import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormHelperText,
  Divider,
  VStack,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import history from "../../../history";
import { login } from "../../../states/action_creators/authCreator";
const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useSelector((state) => {
    const { loggedIn } = state.auth;
    console.log(loggedIn);
    if (loggedIn) {
      history.replace("/");
      return;
    }
    return;
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login(email, password));
    }
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            {/*Form*/}
            <Stack spacing={4}>
              {/*Email*/}
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email || ""}
                  type="email"
                />
                {error && (
                  <FormHelperText color={"crimson"}>
                    Email or password is not correct!
                  </FormHelperText>
                )}
              </FormControl>
              {/*Password*/}

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  value={password || ""}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormControl>
              <Stack>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  {/*Remember me*/}

                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Box minH={10}></Box>
                <Button
                  onClick={(e) => handleLogin(e)}
                  disabled={!email || !password}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
                <Button
                  bg={"purple.400"}
                  color={"white"}
                  _hover={{
                    bg: "purple.100",
                  }}
                  onClick={() => {
                    history.replace("/");
                  }}
                >
                  Sign in as Guest
                </Button>
                <Divider />
                <VStack w={"100%"}>
                  <Text>Don't have an account</Text>
                  <Button w={"100%"} onClick={() => history.push("/register")}>
                    Sign Up
                  </Button>
                </VStack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
