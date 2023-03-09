import React from "react";
import { Button } from "@chakra-ui/react";

const RemoveButton = ({ callback }) => {
  return (
    <Button
      height="2rem"
      width="1rem"
      padding="0"
      colorScheme="green"
      variant="outline"
      boxShadow="md"
      onClick={() => callback()}
    >
      -
    </Button>
  );
};

export default RemoveButton;
