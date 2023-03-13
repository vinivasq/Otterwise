import React from "react";
import { Text } from "@chakra-ui/react";
import { Check } from "@phosphor-icons/react";
import OrderContainer from "./OrderContainer";
import FinishOrderButton from "../Buttons/FinishOrderButton";

const FinishOrder = (props) => {
  const { totalPrice } = props;

  return (
    <OrderContainer>
      <Text textAlign="center">Subtotal: R${totalPrice.toFixed(2)}</Text>
      <FinishOrderButton totalPrice={totalPrice}>
        Finalizar compra
        <Check color="white" size={24} />
      </FinishOrderButton>
    </OrderContainer>
  );
};

export default FinishOrder;
