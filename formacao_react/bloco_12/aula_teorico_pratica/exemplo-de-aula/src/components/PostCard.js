import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const PostCard = (props) => {
  const { title, description } = props;

  return (
    <Card
      w={["calc(100%)", "calc(33.33% - 1rem)", "calc(25% - 1rem)"]}
      height="16rem"
    >
      <CardBody>
        <Stack spacing={2} divider={<StackDivider />}>
          <Heading size="xs" textAlign="center">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PostCard;
