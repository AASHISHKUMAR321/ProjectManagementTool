import React from "react";
import { useEffect, useReducer, usevalue, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { CheckIcon, ViewIcon } from "@chakra-ui/icons";
const initialState = {
  TaskName: "",
  Summary: "",
  status: "",
  Assignee: "",
  dueDate: "",
  Priority: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "TaskName": {
      return { ...state, TaskName: action.payload };
    }
    case "Summary": {
      return { ...state, Summary: action.payload };
    }
    case "status": {
      return { ...state, status: action.payload };
    }
    case "Assignee": {
      return { ...state, Assignee: action.payload };
    }
    case "dueDate": {
      return { ...state, dueDate: action.payload };
    }
    case "Priority": {
      return { ...state, Priority: action.payload };
    }
    case "reset": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
let url = `https://63f0397dc59531ccf17d0605.mockapi.io/task/Task`;
export const CreateTask = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { colorMode, setColreMode } = useColorMode();
  const PostTask = (data) => {
    axios.post(url, data).then((d) => console.log(d));
  };

  const { TaskName, Summary, status, Assignee, dueDate, Priority } = state;
  return (
    <Box>
      <Heading
        mt={20}
        as={"h5"}
        size={"xl"}
        textAlign={"center"}
        colorScheme="green"
      >
        Creating the Task
      </Heading>

      <form
        className="form"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          // setTask([...task, state]);
          PostTask(state);
          dispatch({ type: "reset", payload: initialState });
        }}
      >
        <FormControl>
          <FormLabel>Task name</FormLabel>
          <Input
            placeholder="Task name"
            value={TaskName}
            onChange={(e) =>
              dispatch({ type: "TaskName", payload: e.target.value })
            }
          />
          <FormLabel>Summary</FormLabel>
          <Textarea
            placeholder="Type here your summary"
            value={Summary}
            onChange={(e) =>
              dispatch({ type: "Summary", payload: e.target.value })
            }
          />
          <FormLabel>Status</FormLabel>
          <Select
            placeholder="Select status"
            value={status}
            onChange={(e) =>
              dispatch({ type: "status", payload: e.target.value })
            }
          >
            <option>ToDo</option>
            <option>InProgress</option>
            <option>Done</option>
          </Select>
          <FormLabel>Assignee name</FormLabel>
          <Input
            placeholder="Assignee name"
            value={Assignee}
            onChange={(e) =>
              dispatch({ type: "Assignee", payload: e.target.value })
            }
          />
          <FormLabel>Select Date and Time</FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            value={dueDate}
            onChange={(e) =>
              dispatch({ type: "dueDate", payload: e.target.value })
            }
          />
          <FormLabel>Status</FormLabel>
          <Select
            placeholder="Select Priority"
            value={Priority}
            onChange={(e) =>
              dispatch({ type: "Priority", payload: e.target.value })
            }
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </Select>

          <Button colorScheme="whatsapp" variant="outline" type="submit" mt={5}>
            <CheckIcon boxSize={4} m={2} /> Add Task
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

// <input
//           type="text"
//           placeholder="task name"
//           value={TaskName}
//           onChange={(e) =>
//             dispatch({ type: "TaskName", payload: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Summary"
//           value={Summary}
//           onChange={(e) =>
//             dispatch({ type: "Summary", payload: e.target.value })
//           }
//         />
//         <select
//           name="status"
//           id=""
//           value={status}
//           onChange={(e) =>
//             dispatch({ type: "status", payload: e.target.value })
//           }
//         >
//           <option value="">Select Status </option>
//           <option value="To Do">To Do</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Done">Done</option>
//         </select>
//         <input
//           type="text"
//           placeholder="assignee name"
//           value={Assignee}
//           onChange={(e) =>
//             dispatch({ type: "Assignee", payload: e.target.value })
//           }
//         />
//         <input
//           type="date"
//           value={dueDate}
//           onChange={(e) =>
//             dispatch({ type: "dueDate", payload: e.target.value })
//           }
//         />
//         <select
//           name="Priority"
//           id=""
//           value={Priority}
//           onChange={(e) =>
//             dispatch({ type: "Priority", payload: e.target.value })
//           }
//         >
//           <option value="">Select Priority </option>
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
//           <option value="Low">Low</option>
//         </select>
//         <input type="submit" />
