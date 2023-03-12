import { Button } from "@chakra-ui/react";
import { Trash } from "@phosphor-icons/react";
import React from "react";

const DeleteButton = () => {
  const deleteItem = (event) => {
    console.log(event.target);
    // console.log(event.target.parentElement.nextSibling.remove());
  };

  return (
    <Button
      size="sm"
      variant="outline"
      colorScheme="green"
      padding={0}
      onClick={(event) => deleteItem(event)}
    >
      <Trash color="green" size={24} />
    </Button>
  );
};

export default DeleteButton;
