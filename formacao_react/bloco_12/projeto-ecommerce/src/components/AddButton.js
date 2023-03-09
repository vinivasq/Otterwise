import React from "react";
import { Button } from "@chakra-ui/react";

const AddButton = ({ callback }) => {
  return (
    <Button
      height="2rem"
      width="1rem"
      padding="0"
      colorScheme="green"
      boxShadow="md"
      // onClick={() => console.log(callback)}
      onClick={() => callback()}
    >
      +
    </Button>
  );
};

export default AddButton;
