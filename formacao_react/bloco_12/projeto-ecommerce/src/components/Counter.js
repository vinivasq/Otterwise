import React from "react";
import { Text } from "@chakra-ui/react";
const Counter = (props) => {
  const { amount, product } = props;
  const cartAmount = localStorage.getItem(JSON.stringify(product));

  return (
    <Text
      display="flex"
      height="2rem"
      width="2rem"
      borderRadius="md"
      backgroundColor="#cbd5e1"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
    >
      {amount}
    </Text>
  );
};

export default Counter;
