import React from "react";
import { Text } from "@chakra-ui/react";
const Counter = (props) => {
  const { amount } = props;

  return (
    <Text
      display="flex"
      height="2rem"
      width="2rem"
      borderRadius="md"
      backgroundColor="#f1f5f9"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
    >
      {amount}
    </Text>
  );
};

export default Counter;
