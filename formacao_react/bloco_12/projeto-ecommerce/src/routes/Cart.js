import React, { createContext, useState } from "react";
import CartItem from "../components/CartItem";
import CartList from "../components/CartList";
import ProductsContainer from "../components/ProductsContainer";
import { Box, Text } from "@chakra-ui/react";

export const PriceContext = createContext();

const Cart = () => {
  const items = Object.entries(localStorage);
  const productsInCart = items.filter(
    (item) => item[0] !== "chakra-ui-color-mode"
  );

  let initialPrice = 0;

  productsInCart.map((product) => {
    const productPrice = parseFloat(JSON.parse(product[0]).price);
    const cartAmount = product[1];

    return (initialPrice += productPrice * cartAmount);
  });

  const [totalPrice, setTotalPrice] = useState(initialPrice);
  // console.log(totalPrice);

  return (
    <ProductsContainer>
      <CartList>
        {productsInCart.map((product, i) => {
          const productInfo = JSON.parse(product[0]);
          const cartAmount = product[1];
          return (
            <PriceContext.Provider
              key={i}
              value={{ totalPrice, setTotalPrice }}
            >
              <CartItem product={productInfo} cartAmount={cartAmount} />
            </PriceContext.Provider>
          );
        })}
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Text>Valor total: </Text>
          <Text>R${totalPrice.toFixed(2)}</Text>
        </Box>
      </CartList>
    </ProductsContainer>
  );
};

export default Cart;
