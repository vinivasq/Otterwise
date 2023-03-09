import React from "react";
import Cart from "../routes/Cart";
import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Container } from "@chakra-ui/react";

const CartLink = () => {
  return (
    <Container
      m={0}
      position="fixed"
      top="1rem"
      right="1rem"
      padding=".5rem"
      zIndex="1"
      bg="white"
      borderRadius="md"
      border="1px solid #38A169"
      boxShadow="md"
      maxWidth="-webkit-fit-content"
      alignSelf="flex-end"
    >
      <Link to="/cart" element={<Cart />}>
        <ShoppingCart color="#38A169" size={24} />
      </Link>
    </Container>
  );
};

export default CartLink;
