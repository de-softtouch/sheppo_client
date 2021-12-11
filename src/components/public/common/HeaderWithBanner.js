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
              <Button size={"sm"} variant={"unstyled"}>
                Check it out
              </Button>
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
        <Box bg={"tomato"} w={"100%"} px={5}>
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
                  loggedIn ? history.push("/profile") : history.push("/login");
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
              onClick={() => history.push("/login")}
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
              <AiOutlineShopping color={"white"} size={"30px"} />
              <Box
                // bg={'red'}
                position={"absolute"}
                right={"-10px"}
                top={0}
                w={"20px"}
                borderRadius={"lg"}
                h={"20px"}
                align={"center"}
                justifySelf={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                alignSelf={"center"}
                alignItems={"center"}
                textAlign={"center"}
                justifyItems={"center"}
              >
                <Text
                  color={"white"}
                  align={"center"}
                  justifySelf={"center"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  alignSelf={"center"}
                  alignItems={"center"}
                  textAlign={"center"}
                  justifyItems={"center"}
                >
                  1
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        {/*END OF TOP NAV*/}
      </Flex>
    </>
  );
}

export default HeaderWithBanner;
