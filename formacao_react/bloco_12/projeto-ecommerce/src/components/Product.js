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
    <Card>
      <CardHeader padding="0">
        <Image
          borderRadius="0.375rem 0.375rem 0px 0px"
          boxSize="100%"
          height="8rem"
          src={image}
        />
      </CardHeader>
      <Stack divider={<StackDivider />} padding="0.5rem">
        <CardBody padding="0">
          <Stack divider={<StackDivider />}>
            <Box>
              <Heading size="md">{title}</Heading>
            </Box>
            <Box>
              <Text>Quantidade: {stockAmount}</Text>
              <Text>Preço: R${price}</Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter
          padding="0"
          alignItems="center"
          gap="2"
          justifyContent="center"
        >
          <Button
            height="2rem"
            width="1rem"
            padding="0"
            colorScheme="green"
            variant="outline"
            boxShadow="md"
            onClick={() => setCount(count - 1)}
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
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Product;
