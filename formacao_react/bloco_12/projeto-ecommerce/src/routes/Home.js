import React from "react";
import { Container, UnorderedList, ListItem } from "@chakra-ui/react";
import Product from "../components/Product";
import { products } from "../providers/products";
import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

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
      <Container
        m={0}
        position="fixed"
        top="1rem"
        right="1rem"
        padding=".5rem"
        zIndex="1"
        bg="white"
        borderRadius="md"
        border="1px solid #38A169"
        boxShadow="md"
        maxWidth="-webkit-fit-content"
        alignSelf="flex-end"
      >
        <Link to="/cart" element={<Cart />}>
          <ShoppingCart color="#38A169" size={24} />
        </Link>
      </Container>
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
      </UnorderedList>
    </Container>
  );
};

export default Home;
