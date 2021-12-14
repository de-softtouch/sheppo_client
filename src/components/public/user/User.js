import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Account from "./Account";
import Sidebar from "./Sidebar";
import Address from "./Address";
import Password from "./Password";
function User() {
  return (
    <>
      <Flex minH="100vh" w="100%" bg="gray.100">
        <Box p="4" flex="2">
          <Sidebar />
        </Box>
        <Box m="4" p="4" flex="10" bg="white">
          <Switch>
            <Route path="/user/account/profile" component={Account} />
            <Route path="/user/account/address" component={Address} />
            <Route path="/user/account/password" component={Password} />
            <Route path="/user" component={Account} />
          </Switch>
        </Box>
      </Flex>
    </>
  );
}

export default User;
