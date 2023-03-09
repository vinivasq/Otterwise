import React from "react";
import { useState } from "react";
import { CardFooter } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";
import Counter from "./Counter";

const Product = (props) => {
  const { image, title, stockAmount, price } = props;

  const [amount, setAmount] = useState(0);

  const addToCart = () => {
    if (amount < stockAmount) {
      setAmount(amount + 1);
    }
  };

  const removeFromCart = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <ProductCard
      image={image}
      title={title}
      stockAmount={stockAmount}
      price={price}
    >
      <CardFooter padding="0" gap="2" justifyContent="center">
        <RemoveButton callback={removeFromCart} />
        <Counter amount={amount} />
        <AddButton callback={addToCart} />
      </CardFooter>
    </ProductCard>
  );
};

export default Product;
