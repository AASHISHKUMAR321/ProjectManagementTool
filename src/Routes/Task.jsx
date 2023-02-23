import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ShowTask } from "../Components/ShowTask";

export const Task = () => {
  let url = `https://63f0397dc59531ccf17d0605.mockapi.io/task/Task`;
  const [task, setTask] = useState([]);
  const [update, setUpdate] = useState(false);
  console.log(task);
  useEffect(() => {
    axios.get(url).then((d) => setTask(d.data));
  }, [update]);
  const dragHandler = (result) => {
    let value = result.destination["droppableId"];
    axios
      .patch(
        `https://63f0397dc59531ccf17d0605.mockapi.io/task/Task/${result.draggableId}`,
        { status: value }
      )
      .then((d) => setUpdate(!update));
    console.log(result.draggableId, result.destination["droppableId"]);
  };
  return (
    <DragDropContext onDragEnd={dragHandler}>
      <SimpleGrid
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        justifyContent={"space-around"}
        // border={"1px solid black"}
        textAlign={"center"}
        width={"80%"}
        margin={"auto"}
        mt={10}
      >
        <Droppable droppableId="ToDo">
          {(provided) => (
            <Box
              className="To Do"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Heading>To do</Heading>
              {task?.map((e, i) =>
                e.status == "ToDo" ? <ShowTask {...e} index={i} /> : ""
              )}
            </Box>
          )}
        </Droppable>

        <Droppable droppableId="InProgress">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              <Heading>In Progress</Heading>
              {task?.map((e, i) =>
                e.status == "InProgress" ? <ShowTask {...e} index={i} /> : ""
              )}
            </Box>
          )}
        </Droppable>

        <Droppable droppableId="Done">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              <Heading>Done</Heading>
              {task?.map((e, i) =>
                e.status == "Done" ? <ShowTask {...e} index={i} /> : ""
              )}
            </Box>
          )}
        </Droppable>
      </SimpleGrid>
    </DragDropContext>
  );
};
