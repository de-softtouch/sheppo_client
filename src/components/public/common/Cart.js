import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { AiOutlineShopping } from "react-icons/ai";
import history from "../../../history";
import { useSelector } from "react-redux";

const Cart = () => {
  const calcItem = (state) => {
    const cart = state.cart;
    let rs = 0;
    for (let i = 0; i < cart.length; i++) {
      rs += cart[i].qty;
    }
    return rs;
  };
  //get cart
  const countItem = useSelector(calcItem);

  return (
    <>
      <Box position="relative" onClick={() => history.push("/cart")}>
        <AiOutlineShopping color={"white"} size={"30px"} />
        <Box position={"absolute"} right={"-14px"} top={0}>
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
            {countItem}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
