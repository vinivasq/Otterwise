import React from "react";
import { Container, UnorderedList, ListItem } from "@chakra-ui/react";
import Product from "../components/Product";
import { products } from "../providers/products";

const Home = () => {
  return (
    <Container
      m={0}
      minWidth="100%"
      padding={["0.5rem", "1rem"]}
      backgroundColor="#d9f99d"
      justifyContent="center"
      alignItems="center"
    >
      <UnorderedList
        m={0}
        listStyleType="none"
        display="flex"
        flexWrap="wrap"
        gap="1rem"
        justifyContent={["flex-start", "flex-start", "center"]}
        alignItems="center"
      >
        {products.map((product, i) => {
          return (
            <ListItem
              display="flex"
              width={[
                "calc(50% - .5rem)",
                "calc(33.33% - 1rem)",
                "calc(25% - 1rem)",
                "calc(16.667% - 1rem)",
              ]}
              height="19rem"
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
    </Container>
  );
};

export default Home;
