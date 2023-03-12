import React from "react";
import { useState } from "react";
import AddButton from "./AddButton";
import Counter from "./Counter";
import RemoveButton from "./RemoveButton";
import { Card, CardBody, Image, Text, Box } from "@chakra-ui/react";
import DeleteButton from "./DeleteButton";

const CartItem = (props) => {
  const { cartAmount, product } = props;
  const { image, title, price } = product;

  const addToCart = () => {
    if (amount < product.stockAmount) {
      setAmount(amount + 1);
      localStorage.setItem(JSON.stringify(product), amount + 1);
    }
  };

  const removeFromCart = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      localStorage.setItem(JSON.stringify(product), amount - 1);
    }
  };

  const deleteItem = (event) => {
    console.log(event.target.parentElement);
  };

  const [amount, setAmount] = useState(parseInt(cartAmount));

  return (
    <Card direction="row">
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
            boxSize="4.125rem"
            borderRadius="full"
            justifySelf="center"
            padding=".5rem"
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
        <Box
          width="25%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text width="80%">R${(parseInt(price) * amount).toFixed(2)}</Text>
          <DeleteButton callback={deleteItem} />
        </Box>
      </CardBody>
    </Card>
  );
};

export default CartItem;
