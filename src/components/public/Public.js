import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./common/Footer";
import HeaderWithBanner from "./common/HeaderWithBanner";
import User from "./user/User";
import Home from "./public_home/Home";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import ProductDetails from "./products/ProductDetails";
function Public() {
  return (
    <Flex direction="column">
      <HeaderWithBanner />
      <Box minH="100vh">
        <Switch>
          <Route
            path={"/user/account"}
            component={(props) => <User {...props} />}
          />

          <Route path={"/cart"} component={(props) => <Cart {...props} />} />
          <Route
            path={"/products/:id"}
            component={(props) => <ProductDetails {...props} />}
          />
          <Route
            path={"/checkout"}
            component={(props) => <Checkout {...props} />}
          />
          <Route path={"/"} component={(props) => <Home {...props} />} />
        </Switch>
      </Box>
      <Footer />
    </Flex>
  );
}

export default Public;
