import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Check } from "@phosphor-icons/react";

const FinishOrder = (props) => {
  const { totalPrice } = props;
  const navigate = useNavigate();

  return (
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
  );
};

export default FinishOrder;
