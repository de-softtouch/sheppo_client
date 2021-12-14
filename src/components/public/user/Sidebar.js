import React from "react";
import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
export const Sidebar = () => {
  return (
    <Box>
      <VStack align="start" spacing="5" direction="column">
        <VStack align="start">
          <Text fontWeight="medium">My Account</Text>
          <VStack pl="5" align="start">
            <Text>
              <RLink to="/user/account/profile">Profile</RLink>
            </Text>
            <Text>
              <RLink to="/user/account/address">Address</RLink>
            </Text>
            <Text>
              <RLink to="/user/account/password">Password</RLink>
            </Text>
          </VStack>
        </VStack>
        <VStack align="start">
          <Text fontWeight="medium">Order</Text>
        </VStack>
      </VStack>
    </Box>
  );
};
export default Sidebar;
