import React from "react";
import { Button } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FinishOrderButton = (props) => {
  const { totalPrice, children } = props;
  const navigate = useNavigate();

  return (
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
      {children}
    </Button>
  );
};

export default FinishOrderButton;
