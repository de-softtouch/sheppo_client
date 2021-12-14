import {
  Flex,
  VStack,
  Text,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Divider,
  RadioGroup,
  Radio,
  HStack,
  Select,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Account() {
  const [userInfo, setUserInfo] = useState(null);
  //get user from state
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    setUserInfo(user);
    console.log(user);
  }, [setUserInfo]);
  return (
    <>
      <Flex>
        <VStack spacing="2">
          <VStack align="start" w="100%">
            <Text>Manage profile</Text>
            <Text>Manage profile to protect your account</Text>
          </VStack>
          <Divider w={{ base: "100%", md: "80%" }} />
          <VStack w="100%" spacing="5" align="start" alignSelf="start">
            <VStack w={{ base: "100%", md: "80%" }}>
              {/* USERNAME */}
              <FormControl id="username">
                <FormLabel>Full name</FormLabel>
                <Input
                  onChange={(e) => {
                    setUserInfo((state) => ({
                      ...state,
                      fullName: e.target.value,
                    }));
                  }}
                  value={(userInfo && userInfo.fullName) || ""}
                  type="text"
                />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>
              {/* EMAIL */}
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  onChange={(e) => {
                    setUserInfo((state) => ({
                      ...state,
                      email: e.target.value,
                    }));
                  }}
                  value={(userInfo && userInfo.email) || ""}
                  type="email"
                />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>
              {/* PHONE */}
              <FormControl id="phone">
                <FormLabel>Phone number</FormLabel>
                <Input
                  onChange={(e) => {
                    setUserInfo((state) => ({
                      ...state,
                      phone: e.target.value,
                    }));
                  }}
                  value={(userInfo && userInfo.phone) || ""}
                  type="phone"
                />
                <FormHelperText>We'll never share your phone.</FormHelperText>
              </FormControl>
            </VStack>
            {/* GENDER */}
            <FormControl as="fieldset">
              <FormLabel as="legend">GENDER</FormLabel>
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="24px">
                  <Radio value="0">Male</Radio>
                  <Radio value="1">Femal</Radio>
                  <Radio value="2">None</Radio>
                  {/* <Radio value="Sage of the six Paths">Sage of the six Paths</Radio> */}
                </HStack>
              </RadioGroup>
            </FormControl>
            {/* DOB */}
            <HStack spacing="5" w="100%">
              <FormControl id="day">
                <FormLabel>Day</FormLabel>
                <Select placeholder="Select day">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
              <FormControl id="month">
                <FormLabel>Month</FormLabel>
                <Select placeholder="Select month">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
              <FormControl id="year">
                <FormLabel>Year</FormLabel>
                <Select placeholder="Select year">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </HStack>
            <Button variant="solid" colorScheme="teal">
              Save
            </Button>
          </VStack>
        </VStack>
        <VStack>
          <Text>sfgsdfgdfg</Text>
        </VStack>
      </Flex>
    </>
  );
}

export default Account;
