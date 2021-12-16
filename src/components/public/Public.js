import { Flex, Box, IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./common/Footer";
import HeaderWithBanner from "./common/HeaderWithBanner";
import User from "./user/User";
import Home from "./public_home/Home";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import ProductDetails from "./products/ProductDetails";
import Products from "./products/Products";
import Shop from "./shop/Shop";
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
          <Route path="/shop" component={(props) => <Shop {...props} />} />
          <Route path={"/cart"} component={(props) => <Cart {...props} />} />
          <Route
            path={"/products/:id"}
            component={(props) => <ProductDetails {...props} />}
          />
          <Route
            path="/products"
            component={(props) => <Products {...props} />}
          />
          <Route
            path={"/checkout"}
            component={(props) => <Checkout {...props} />}
          />
          <Route path={"/"} component={(props) => <Home {...props} />} />
        </Switch>
      </Box>
      <Footer />
      <Box
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        zIndex="100000000"
        position="fixed"
        bottom="5"
        right="5"
      >
        <IconButton color="black" icon={<ArrowUpIcon />} />
      </Box>
    </Flex>
  );
}

export default Public;
