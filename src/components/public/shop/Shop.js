import React from "react";
import {
  Box,
  HStack,
  VStack,
  SimpleGrid,
  Avatar,
  Image,
  Button,
  Text,
  Heading,
  Select,
  Input,
  Divider,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { BsFillChatFill } from "react-icons/bs";
import history from "../../../history";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
const Shop = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Flex direction="column">
        <Box p="5" bg="white" w="100%">
          <HStack w="100%" spacing={6}>
            <Box
              minH="150px"
              minW="350px"
              position="relative"
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundImage={
                "https://images.pexels.com/photos/6787007/pexels-photo-6787007.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }
            >
              <Flex
                p="5"
                justifyContent="space-between"
                direction="column"
                h="150px"
              >
                <HStack align="start" w="100%">
                  <Avatar
                    size="lg"
                    name="shop avatar"
                    src="https://images.pexels.com/photos/10311051/pexels-photo-10311051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  />
                </HStack>
                <Button
                  colorScheme={"orange"}
                  borderRadius="0"
                  variant="outline"
                  size="sm"
                  w={"100%"}
                >
                  Follow
                </Button>
              </Flex>
            </Box>
            <VStack align={"start"}>
              <Text color="orange" fontWeight="medium" fontSize="large">
                NKD
              </Text>
              <Text>Active 25m ago</Text>
              <ButtonGroup size="sm">
                <Button rightIcon={<BsFillChatFill />}>Chat</Button>
              </ButtonGroup>
            </VStack>
            <Divider minH="80px" mx="10" px="10" orientation="vertical" />
            <SimpleGrid columns="3" spacing="5">
              {[1, 2, 3, 3, 3, 3].map((item, i) => (
                <HStack>
                  <Text color="gray.700">Ratings</Text>
                  <Text color="orange">3,8k</Text>
                </HStack>
              ))}
            </SimpleGrid>
            {/* SHOP INFO */}
          </HStack>
        </Box>
        <Divider />
        <Box w="100%" bg="white">
          <Flex
            w="90%"
            m="auto"
            alignItems="center"
            justifyContent="space-around"
            p="4"
          >
            <Box
              cursor="pointer"
              onClick={() => history.push("/shop")}
              borderBottom={1}
              borderColor="gray.400"
            >
              <Text>Home</Text>
            </Box>
            <Box
              cursor="pointer"
              onClick={() => history.push("/shop/32323/products")}
              borderBottom={1}
              borderColor="gray.400"
            >
              <Text>Products</Text>
            </Box>
            <Box borderBottom={1} borderColor="gray.400">
              <Text>Home</Text>
            </Box>
          </Flex>
        </Box>

        <Box p="5">
          <Switch>
            <Route path="/shop/:id/products" component={() => <Products />} />
            <Route path="/shop" component={() => <Home />} />
          </Switch>
        </Box>
      </Flex>
    </Box>
  );
};

export default Shop;
