import React from "react";
import {
  Image,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Box,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

const ProductCard = (props) => {
  const { image, title, stockAmount, price, children } = props;

  return (
    <Card>
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
        {children}
      </Stack>
    </Card>
  );
};

export default ProductCard;
