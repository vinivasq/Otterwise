import React from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  StackDivider,
  Box,
} from "@chakra-ui/react";

const CommentCard = (props) => {
  const { title, description } = props;

  return (
    <Card
      w="350px"
      padding="1rem"
      m={"auto"}
      mt="1rem"
      backgroundColor="#4338ca"
      borderRadius="md"
      boxShadow="md"
    >
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="sm" color="white">
              {title}
            </Heading>
          </Box>
          <Box>
            <Text color="white">{description}</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CommentCard;
