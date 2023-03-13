import React from "react";
import { Button } from "@chakra-ui/react";

const AddButton = ({ callback }) => {
  return (
    <Button
      colorScheme="green"
      boxShadow="md"
      size="sm"
      onClick={() => callback()}
    >
      +
    </Button>
  );
};

export default AddButton;
