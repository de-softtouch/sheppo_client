import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  removeItem,
  updateItem,
} from "../../../states/action_creators/cartCreator";
import { CartProductMeta } from "./CartProductMeta";
import { PriceTag } from "./PriceTag";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
const QuantitySelect = (props) => {
  const { id, qty } = props;
  const dispatch = useDispatch();

  return (
    <InputGroup cursor="pointer" size="sm">
      <InputRightAddon
        onClick={() => {
          let temp = qty;
          dispatch(updateItem(id, --temp));
        }}
        cursor="pointer"
        children="-"
      />
      <Input
        value={qty}
        onChange={(e) => {
          if (e && parseInt(e.target.value)) {
            let q = parseInt(e.target.value);
            dispatch(updateItem(id, q));
          } else {
            dispatch(updateItem(id, 1));
          }
        }}
        type="value"
        textAlign="center"
        maxW="40px"
        p="0"
        m="0"
        placeholder="1"
      />
      <InputLeftAddon
        onClick={() => {
          let temp = qty;
          dispatch(updateItem(id, ++temp));
        }}
        cursor="pointer"
        children="+"
      />
    </InputGroup>
  );
};

export const CartItem = (props) => {
  const {
    isGiftWrapping,
    name,
    standardPrice,
    salesPrice,
    qty,
    coverImage,
    description,
    quantity,
    onChangeQuantity,
    onClickDelete,
    id,
  } = props;
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };
  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={description}
        image={coverImage}
        isGiftWrapping={false}
      />

      {/* Desktop */}
      <Flex
        px="5"
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect
          id={id}
          qty={qty}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={standardPrice} currency={"VND"} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => handleRemoveItem()}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={standardPrice} currency={"VND"} />
      </Flex>
    </Flex>
  );
};
