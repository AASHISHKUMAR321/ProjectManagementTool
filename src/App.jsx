import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Welcome } from "./Components/Welcome";
import { TextField } from "@mui/material";

function App() {
  const [count, setCount] = useState(true);
  let TaskName = useRef("");
  let summary = useRef("");
  let status = useRef("");
  let Assignee = useRef("");
  let dueDate = useRef("");
  let Priority = useRef("");
  useEffect(() => {
    setTimeout(() => {
      setCount(false);
    }, 2000);
  }, []);

  if (count) {
    return <Welcome />;
  }
  return (
    <div className="App">
      <h3> creating a new task</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(TaskName.current.value);
        }}
      >
        <input type="text" placeholder="task name" ref={TaskName} />
        <input type="text" placeholder="Summary" ref={summary} />
        <select name="" id="" ref={status}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <input type="text" placeholder="assignee name" ref={Assignee} />
        <input type="date" ref={dueDate} />
        <select name="" id="" ref={status}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
