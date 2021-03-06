import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineShopping, BiSearch } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import history from "../../../history";
function HeaderWithBanner() {
  const [banner, setBanner] = useState(true);

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <Flex
        zIndex={999}
        direction={"column"}
        w={"100%"}
        position={"sticky"}
        top={0}
      >
        {/*BANNER*/}
        {banner && (
          <Flex
            bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"end"}
            w={"100%"}
          >
            <HStack
              alignItems="center"
              w={"100%"}
              align={"center"}
              justifyContent={"center"}
            >
              <Text>Did you buy a license yet?</Text>
              <Text
                _hover={{
                  color: "white",
                }}
                cursor="pointer"
                textDecoration={"underline"}
              >
                Check it out
              </Text>
            </HStack>
            <CloseButton
              onClick={() => setBanner(false)}
              ml={"auto"}
              justifySelf={"flex-end"}
              alignSelf={"flex-end"}
            />
          </Flex>
        )}
        {/*END OF BANNER*/}
        {/*TOP NAV*/}
        <Box bg={"gray.700"} w={"100%"} px={5}>
          <Flex justifyContent={"space-between"} w={"100%"}>
            <HStack color={"white"} cursor={"pointer"}>
              <Text>Kenh nguoi ban| </Text>
              <Text>Tai ung dung| </Text>
              <Text>Ket noi| </Text>
            </HStack>
            <HStack color={"white"}>
              <Text
                cursor="pointer"
                onClick={() => {
                  loggedIn
                    ? history.push("/user/account/profile")
                    : history.push("/login");
                }}
              >
                {loggedIn ? user.fullName : "Log in"}
              </Text>
              {!loggedIn && (
                <Text onClick={() => console.log("register")}>Register</Text>
              )}
            </HStack>
          </Flex>

          <Flex
            alignItems={"center"}
            py={2}
            justifyContent={"space-between"}
            w={"95%"}
            m={"auto"}
          >
            <Heading
              onClick={() => history.push("/")}
              cursor={"pointer"}
              color={"white"}
              letterSpacing={1}
            >
              Logo
            </Heading>
            <VStack w={"100%"}>
              <InputGroup color={"white"} maxW={600}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BiSearch color="gray.300" />}
                />
                <Input color={"white"} type="tel" placeholder="Search..." />
              </InputGroup>
              <Stack direction="row">
                {/*<Badge>Default</Badge>*/}
                {/*<Badge colorScheme='green'>Success</Badge>*/}
                {/*<Badge colorScheme='red'>Removed</Badge>*/}
                {/*<Badge colorScheme='purple'>New</Badge>*/}
                {["electronics", "bike", "clothes", "bag", "phone", "milk"].map(
                  (item, index) => (
                    <Text
                      key={index}
                      color={"white"}
                      fontSize={14}
                      cursor={"pointer"}
                    >
                      {item}
                    </Text>
                  )
                )}
              </Stack>
            </VStack>
            {/*<IconButton colorScheme={'white'} bg={'transparent'} aria-label='Search database'*/}
            {/*            icon={<AiOutlineShoppingCart size={'md'}/>}/>*/}

            <Box align={"center"} position={"relative"}>
              <Cart />
            </Box>
          </Flex>
        </Box>
        {/*END OF TOP NAV*/}
      </Flex>
    </>
  );
}

export default HeaderWithBanner;
