import { Stack, StackDivider, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const CartList = (props) => {
  const { children } = props;

  return (
    <UnorderedList
      m={0}
      padding=".5rem"
      width="100%"
      backgroundColor="#f8fafc"
      borderRadius="md"
    >
      <Stack
        padding=".5rem"
        direction="row"
        textAlign="center"
        divider={<StackDivider />}
      >
        <Text width="25%">Item</Text>
        <Text width="25%">Quantidade</Text>
        <Text width="25%">Valor</Text>
        <Text width="25%">Total</Text>
      </Stack>
      <Stack>{children}</Stack>
    </UnorderedList>
  );
};

export default CartList;
