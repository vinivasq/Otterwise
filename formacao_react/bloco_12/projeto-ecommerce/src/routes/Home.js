import React from "react";
import { ListItem } from "@chakra-ui/react";
import Product from "../components/Product";
import { products } from "../providers/products";
import CartLink from "../components/CartLink";
import ProductsList from "../components/ProductsList";
import ProductsContainer from "../components/ProductsContainer";

const Home = () => {
  return (
    <ProductsContainer>
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
                product={product}
                image={product.image}
                title={product.title}
                stockAmount={product.stockAmount}
                price={product.price}
              />
            </ListItem>
          );
        })}
      </ProductsList>
    </ProductsContainer>
  );
};

export default Home;
