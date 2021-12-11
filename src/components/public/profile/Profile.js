import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
function Profile() {
  return (
    <>
      <Flex minH="100vh" w="100%" bg="gray.100">
        <Box p="4" flex="2">
          sidebar
        </Box>
        <Box m="4" p="4" flex="10" bg="white">
          <Switch>
            <Route path="/profile" component={Main} />
          </Switch>
        </Box>
      </Flex>
    </>
  );
}

export default Profile;
