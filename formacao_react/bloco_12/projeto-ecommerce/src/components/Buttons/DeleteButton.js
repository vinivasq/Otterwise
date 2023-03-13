import { Button } from "@chakra-ui/react";
import { Trash } from "@phosphor-icons/react";
import React from "react";

const DeleteButton = ({ callback }) => {
  return (
    <Button
      size="sm"
      variant="outline"
      colorScheme="green"
      boxShadow="md"
      padding={0}
      onClick={() => callback()}
    >
      <Trash color="green" size={24} />
    </Button>
  );
};

export default DeleteButton;
