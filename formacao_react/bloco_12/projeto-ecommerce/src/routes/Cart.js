import React from "react";
import CartItem from "../components/CartItem";
import CartList from "../components/CartList";
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
            <CartItem
              key={i}
              product={productInfo}
              image={productInfo.image}
              title={productInfo.title}
              cartAmount={cartAmount}
              price={productInfo.price}
            />
          );
        })}
      </CartList>
    </ProductsContainer>
  );
};

export default Cart;
