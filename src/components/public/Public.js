import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./common/Footer";
import HeaderWithBanner from "./common/HeaderWithBanner";
import Profile from "./profile/Profile";
import Home from "./public_home/Home";
function Public() {
  return (
    <Flex direction="column">
      <HeaderWithBanner />
      <Box minH="100vh">
        <Switch>
          <Route
            path={"/profile"}
            component={(props) => <Profile {...props} />}
          />

          <Route path={"/"} component={(props) => <Home {...props} />} />
        </Switch>
      </Box>
      <Footer />
    </Flex>
  );
}

export default Public;
