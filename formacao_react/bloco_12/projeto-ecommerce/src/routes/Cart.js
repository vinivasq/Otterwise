import React from "react";
import CartItem from "../components/CartItem";
import CartList from "../components/CartList";
import ProductsContainer from "../components/ProductsContainer";
import { Box, Text } from '@chakra-ui/react'

const Cart = () => {
  const items = Object.entries(localStorage);
  const productsInCart = items.filter(
    (item) => item[0] !== "chakra-ui-color-mode"
  );

  let totalPrice  = 0

  productsInCart.map((product) => {
    const productPrice = parseFloat(JSON.parse(product[0]).price)
    const cartAmount = product[1]

    console.log(productPrice);
    console.log(cartAmount);

    return totalPrice += productPrice * cartAmount
  })

  console.log(totalPrice);

  return (
    <ProductsContainer>
      <CartList>
        {productsInCart.map((product, i) => {
          const productInfo = JSON.parse(product[0]);
          const cartAmount = product[1];
          return (
            <CartItem key={i} product={productInfo} cartAmount={cartAmount} />
          );
        })}
        <Box display="flex" jutifyContent="" align>
          <Text>Valor total: </Text>
          <Text>R${totalPrice.toFixed(2)}</Text>
        </Box>
      </CartList>
    </ProductsContainer>
  );
};

export default Cart;
