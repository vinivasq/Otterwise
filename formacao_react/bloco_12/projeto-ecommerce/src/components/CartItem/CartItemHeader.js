import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

const CartItemHeader = (props) => {
  const { image, title } = props;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="25%">
      <Image
        src={image}
        boxSize="3.125rem"
        boxShadow="md"
        borderRadius="full"
        justifySelf="center"
        margin=".5rem"
      />
      <Text textAlign="center" fontWeight="medium" width="50%">
        {title}
      </Text>
    </Box>
  );
};

export default CartItemHeader;
