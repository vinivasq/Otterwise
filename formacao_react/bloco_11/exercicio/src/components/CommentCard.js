import React from "react";
import { Card, CardHeader, CardBody, Text, Heading } from "@chakra-ui/react";

const CommentCard = (props) => {
  const { title, description } = props;

  return (
    <Card
      w="350px"
      padding="1rem"
      m={"auto"}
      mt="1rem"
      backgroundColor="#f1f5f9"
      borderRadius="5px"
      boxShadow="1px 1px 5px black"
    >
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
    </Card>
  );
};

export default CommentCard;
