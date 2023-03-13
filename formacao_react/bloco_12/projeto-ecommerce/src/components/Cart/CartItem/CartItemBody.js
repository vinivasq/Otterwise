import { CardBody } from "@chakra-ui/react";
import React from "react";

const CartItemBody = ({ children }) => {
  return (
    <CardBody
      padding={0}
      display="flex"
      direction="row"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      {children}
    </CardBody>
  );
};

export default CartItemBody;
