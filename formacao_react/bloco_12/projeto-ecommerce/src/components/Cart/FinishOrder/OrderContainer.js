import { Box } from "@chakra-ui/react";
import React from "react";

const OrderContainer = ({ children }) => {
  return (
    <Box
      width="25%"
      display="flex"
      alignSelf="flex-end"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap=".5rem"
    >
      {children}
    </Box>
  );
};

export default OrderContainer;
