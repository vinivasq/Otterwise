import { Box } from "@chakra-ui/react";
import React from "react";

const CartButtonsContainer = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      width="25%"
    >
      {children}
    </Box>
  );
};

export default CartButtonsContainer;
