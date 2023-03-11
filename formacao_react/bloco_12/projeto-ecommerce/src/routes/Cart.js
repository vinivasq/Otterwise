import React from "react";

const Cart = () => {
  const items = Object.entries(localStorage);

  console.log(items);

  return <div>Cart</div>;
};

export default Cart;
