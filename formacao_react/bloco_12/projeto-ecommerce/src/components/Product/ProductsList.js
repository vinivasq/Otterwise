import React from "react";
import { UnorderedList } from "@chakra-ui/react";

const ProductsList = (props) => {
  const { children } = props;

  return (
    <UnorderedList
      m={0}
      listStyleType="none"
      display="flex"
      flexWrap="wrap"
      gap="1rem"
      justifyContent={["flex-start", "flex-start", "center"]}
      alignItems="center"
    >
      {children}
    </UnorderedList>
  );
};

export default ProductsList;
