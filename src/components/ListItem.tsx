import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ITask } from "../store/list.store";

interface IParams {
  task: ITask;
}

export const ListItem = (params: IParams) => {
  return (
    <Card w="auto" direction={{ base: "column", sm: "row" }} variant="outline">
      <Image
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/150"
        maxW={{ base: "100%", sm: "100px" }}
        src={params.task.avatar}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading size="md">{params.task.name} </Heading>

          <Text py="2">{params.task.createdAt}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};
