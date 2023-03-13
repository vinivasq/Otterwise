import React, { createContext, useState } from "react";
import CartItem from "../components/CartItem";
import CartList from "../components/CartList";
import ProductsContainer from "../components/ProductsContainer";
import { Box, Button, Text } from "@chakra-ui/react";
import { Check } from "@phosphor-icons/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
          <Box
            width="25%"
            display="flex"
            alignSelf="flex-end"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap=".5rem"
          >
            <Text textAlign="center">Subtotal: R${totalPrice.toFixed(2)}</Text>
            <Button
              size="sm"
              colorScheme="green"
              boxShadow="md"
              padding=".5rem"
              gap=".5rem"
              onClick={() => {
                if (totalPrice.toFixed(2) > 0) {
                  localStorage.clear();
                  toast.success("Compra realizada com sucesso!");
                  navigate("/");
                  return;
                }
                toast.error("Adicione produtos para comprar!");
                navigate("/");
              }}
            >
              Finalizar compra
              <Check color="white" size={24} />
            </Button>
          </Box>
        </CartList>
      </PriceContext.Provider>
    </ProductsContainer>
  );
};

export default Cart;
