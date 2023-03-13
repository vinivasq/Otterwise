import React, { createContext, useState } from "react";
import CartItem from "../components/CartItem";
import CartList from "../components/CartList";
import ProductsContainer from "../components/ProductsContainer";
import FinishOrder from "../components/FinishOrder";

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

  return (
    <ProductsContainer>
      <PriceContext.Provider value={{ totalPrice, setTotalPrice }}>
        <CartList>
          {productsInCart.map((product, i) => {
            const productInfo = JSON.parse(product[0]);
            const cartAmount = product[1];
            return (
              <CartItem key={i} product={productInfo} cartAmount={cartAmount} />
            );
          })}
          <FinishOrder totalPrice={totalPrice} />
        </CartList>
      </PriceContext.Provider>
    </ProductsContainer>
  );
};

export default Cart;
