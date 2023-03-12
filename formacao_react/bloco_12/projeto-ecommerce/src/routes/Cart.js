import { Box } from "@chakra-ui/react";
import React from "react";
import CartItem from "../components/CartItem";
import CartList from "../components/CartList";
import DeleteButton from "../components/DeleteButton";
import ProductsContainer from "../components/ProductsContainer";

const Cart = () => {
  const items = Object.entries(localStorage);
  const productsInCart = items.filter(
    (item) => item[0] !== "chakra-ui-color-mode"
  );

  return (
    <ProductsContainer>
      <CartList>
        {productsInCart.map((product, i) => {
          const productInfo = JSON.parse(product[0]);
          const cartAmount = product[1];
          return (
            <Box key={i} display="flex" alignItems="center" gap=".5rem">
              <CartItem product={productInfo} cartAmount={cartAmount} />
              <DeleteButton product={productInfo} />
            </Box>
          );
        })}
      </CartList>
    </ProductsContainer>
  );
};

export default Cart;
