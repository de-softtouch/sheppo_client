import React from "react";
import { Box, Flex, Heading, HStack, Link, Stack } from "@chakra-ui/react";
import { cartData } from "./cartData";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./OrderSummaryItem";
import { useSelector, useDispatch } from "react-redux";
import { Link as RLink } from "react-router-dom";
import history from "../../../history";
const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <>
      <Box
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "8",
          md: "12",
        }}
        py={{
          base: "8",
          md: "12",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart (3 items)
            </Heading>

            <Stack spacing="6">
              {cart && cart.map((item) => <CartItem key={item.id} {...item} />)}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link onClick={() => history.push("/")} color={"blue.500"}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Cart;
