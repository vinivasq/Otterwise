import React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import Product from "../components/Product";
import { products } from "../providers/products";

const Home = () => {
  return (
    <UnorderedList
      m="auto"
      mt="1rem"
      backgroundColor="#d9f99d"
      listStyleType="none"
      display="flex"
      flexWrap="wrap"
      gap="0.5rem"
      justifyContent="center"
      alignItems="center"
    >
      {products.map((product, i) => {
        return (
          <ListItem
            display="flex"
            width={[
              "calc(50% - .5rem)",
              "calc(33.33% - 0.5rem)",
              "calc(16.667% - 0.5rem)",
            ]}
            height="100%"
            key={i}
          >
            <Product
              image={product.image}
              title={product.title}
              stockAmount={product.stockAmount}
              price={product.price}
            />
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default Home;
