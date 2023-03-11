import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import React from "react";

const CartItem = (props) => {
  const { image, title, cartAmount, price } = props;

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
        <Image
          src={image}
          boxSize="4.125rem"
          borderRadius="full"
          padding=".5rem"
        />
        <Text
          width="calc(25% - 3.125rem)"
          textAlign="start"
          fontWeight="medium"
        >
          {title}
        </Text>
        <Text width="25%">{cartAmount}</Text>
        <Text width="25%">R${price}</Text>
        <Text width="25%">R${(parseInt(price) * cartAmount).toFixed(2)}</Text>
      </CardBody>
    </Card>
  );
};

export default CartItem;
