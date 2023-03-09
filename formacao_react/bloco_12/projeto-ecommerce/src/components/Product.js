import React from "react";
import { useState } from "react";
import {
  Image,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Box,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

const Product = (props) => {
  const { image, title, stockAmount, price } = props;

  const [count, setCount] = useState(0);

  return (
    <Card height="100%">
      <CardHeader padding="0">
        <Image
          borderRadius="0.375rem 0.375rem 0px 0px"
          objectFit={"cover"}
          boxSize="100%"
          height="9rem"
          src={image}
        />
      </CardHeader>
      <Stack divider={<StackDivider />} padding="0.5rem" height="100%">
        <CardBody padding="0">
          <Stack
            divider={<StackDivider />}
            height="100%"
            justifyContent="center"
          >
            <Box>
              <Heading size="md">{title}</Heading>
            </Box>
            <Box>
              <Text>Quantidade: {stockAmount}</Text>
              <Text>Preço: R${price}</Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter padding="0" gap="2" justifyContent="center">
          <Button
            height="2rem"
            width="1rem"
            padding="0"
            colorScheme="green"
            variant="outline"
            boxShadow="md"
            onClick={() => {
              if (count >= 1) {
                setCount(count - 1);
              }
              return;
            }}
          >
            -
          </Button>

          <Text
            display="flex"
            height="2rem"
            width="2rem"
            borderRadius="md"
            backgroundColor="#cbd5e1"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
          >
            {count}
          </Text>

          <Button
            height="2rem"
            width="1rem"
            padding="0"
            colorScheme="green"
            boxShadow="md"
            onClick={() => {
              if (count < stockAmount) {
                setCount(count + 1);
              }
              return;
            }}
          >
            +
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Product;
