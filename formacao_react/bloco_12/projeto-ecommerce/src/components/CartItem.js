import React, { useContext } from "react";
import { useState } from "react";
import AddButton from "./AddButton";
import Counter from "./Counter";
import RemoveButton from "./RemoveButton";
import { Card, CardBody, Image, Text, Box, Button } from "@chakra-ui/react";
import { Trash } from "@phosphor-icons/react";
import { PriceContext } from "../routes/Cart";

const CartItem = (props) => {
  const { cartAmount, product } = props;
  const { image, title, price } = product;
  const { totalPrice, setTotalPrice } = useContext(PriceContext);
  const [deleted, setDeleted] = useState(false);
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

  if (deleted) {
    localStorage.removeItem(JSON.stringify(product));
    setTotalPrice(totalPrice - parseFloat(price) * amount);

    return;
  }

  return (
    <Box display="flex" alignItems="center" gap=".5rem">
      <Card direction="row" flexGrow="1">
        <CardBody
          padding={0}
          display="flex"
          direction="row"
          alignItems="center"
          textAlign="center"
          width="100%"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="25%"
          >
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
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
            width="25%"
          >
            <RemoveButton callback={removeFromCart} />
            <Counter amount={amount} />
            <AddButton callback={addToCart} />
          </Box>
          <Text width="25%">R${price}</Text>
          <Text width="25%">R${(parseFloat(price) * amount).toFixed(2)}</Text>
        </CardBody>
      </Card>
      <Button
        size="sm"
        variant="outline"
        colorScheme="green"
        boxShadow="md"
        padding={0}
        onClick={() => {
          setDeleted(true);
        }}
      >
        <Trash color="green" size={24} />
      </Button>
    </Box>
  );
};

export default CartItem;
