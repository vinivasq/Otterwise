import { Container } from "@chakra-ui/react";
import React from "react";

const ProductsContainer = (props) => {
  const { children, bgColor } = props;

  return (
    <Container
      display="flex"
      minWidth="100%"
      padding={["0.5rem", "1rem"]}
      backgroundColor={bgColor || "#d9f99d"}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Container>
  );
};

export default ProductsContainer;
