import React from "react";
import { useEffect, useReducer, usevalue, useState } from "react";
import axios from "axios";
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
  const PostTask = (data) => {
    axios.post(url, data).then((d) => console.log(d));
  };

  const { TaskName, Summary, status, Assignee, dueDate, Priority } = state;
  return (
    <div>
      <h3> Creating a new task</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          // setTask([...task, state]);
          PostTask(state);
          dispatch({ type: "reset", payload: initialState });
        }}
      >
        <input
          type="text"
          placeholder="task name"
          value={TaskName}
          onChange={(e) =>
            dispatch({ type: "TaskName", payload: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Summary"
          value={Summary}
          onChange={(e) =>
            dispatch({ type: "Summary", payload: e.target.value })
          }
        />
        <select
          name="status"
          id=""
          value={status}
          onChange={(e) =>
            dispatch({ type: "status", payload: e.target.value })
          }
        >
          <option value="">Select Status </option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <input
          type="text"
          placeholder="assignee name"
          value={Assignee}
          onChange={(e) =>
            dispatch({ type: "Assignee", payload: e.target.value })
          }
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            dispatch({ type: "dueDate", payload: e.target.value })
          }
        />
        <select
          name="Priority"
          id=""
          value={Priority}
          onChange={(e) =>
            dispatch({ type: "Priority", payload: e.target.value })
          }
        >
          <option value="">Select Priority </option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};
