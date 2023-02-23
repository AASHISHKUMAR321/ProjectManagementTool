import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Draggable } from "react-beautiful-dnd";

export const ShowTask = ({
  TaskName,
  Summary,
  status,
  Assignee,
  dueDate,
  Priority,
  id,
  index,
}) => {
  console.log(id);
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Card
          maxW={"sm"}
          mb={10}
          key={id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardBody>
            <Stack mt="6" spacing="3">
              <Text color="blue.600" fontSize="2xl">
                TaskName- {TaskName}
              </Text>
              <Text color="blue.600" fontSize="2xl">
                Summary- {Summary}
              </Text>

              <Text color="blue.600" fontSize="2xl">
                Assignee- {Assignee}
              </Text>
              <Text color="blue.600" fontSize="x">
                Date & Time {dueDate}
              </Text>
              <Text color="blue.600" fontSize="2xl">
                Priority- {Priority}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      )}
    </Draggable>
  );
};
