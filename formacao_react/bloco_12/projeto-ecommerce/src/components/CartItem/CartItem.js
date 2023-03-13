import React, { useContext } from "react";
import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import Counter from "../Counter";
import RemoveButton from "../Buttons/RemoveButton";
import { Card, Text, Box } from "@chakra-ui/react";
import { PriceContext } from "../../routes/Cart";
import CartItemBody from "./CartItemBody";
import CartItemHeader from "./CartItemHeader";
import CartButtonsContainer from "./CartButtonsContainer";
import DeleteButton from "../Buttons/DeleteButton";

const CartItem = (props) => {
  const { cartAmount, product } = props;
  const { image, title, price } = product;
  const { totalPrice, setTotalPrice } = useContext(PriceContext);
  const [amount, setAmount] = useState(parseFloat(cartAmount));

  const addToCart = () => {
    if (amount < product.stockAmount) {
      setAmount(amount + 1);
      setTotalPrice(
        totalPrice +
          (parseFloat(price) * (amount + 1) - parseFloat(price) * amount)
      );
      localStorage.setItem(JSON.stringify(product), amount + 1);
    }
  };

  const removeFromCart = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setTotalPrice(
        totalPrice -
          (parseFloat(price) * (amount + 1) - parseFloat(price) * amount)
      );
      localStorage.setItem(JSON.stringify(product), amount - 1);
    }
  };

  const deleteItem = () => {
    localStorage.removeItem(JSON.stringify(product));
    setTotalPrice(totalPrice - parseFloat(price) * amount);
  };

  return (
    <Box display="flex" alignItems="center" gap=".5rem">
      <Card direction="row" flexGrow="1">
        <CartItemBody>
          <CartItemHeader image={image} title={title} />
          <CartButtonsContainer>
            <RemoveButton callback={removeFromCart} />
            <Counter amount={amount} />
            <AddButton callback={addToCart} />
          </CartButtonsContainer>
          <Text width="25%">R${price}</Text>
          <Text width="25%">R${(parseFloat(price) * amount).toFixed(2)}</Text>
        </CartItemBody>
      </Card>
      <DeleteButton callback={deleteItem} />
    </Box>
  );
};

export default CartItem;
