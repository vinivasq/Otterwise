import React from "react";
import { Button } from "@chakra-ui/react";

const RemoveButton = ({ callback }, size) => {
  return (
    <Button
      colorScheme="green"
      variant="outline"
      boxShadow="md"
      size="sm"
      onClick={() => callback()}
    >
      -
    </Button>
  );
};

export default RemoveButton;
