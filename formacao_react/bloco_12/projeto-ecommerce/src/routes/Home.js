import React from "react";
import { Container, ListItem } from "@chakra-ui/react";
import Product from "../components/Product";
import { products } from "../providers/products";
import CartLink from "../components/CartLink";
import ProductsList from "../components/ProductsList";

const Home = () => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      minWidth="100%"
      padding={["0.5rem", "1rem"]}
      backgroundColor="#d9f99d"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
    >
      <CartLink />
      <ProductsList>
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
              height="20rem"
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
      </ProductsList>
    </Container>
  );
};

export default Home;
