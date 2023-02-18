import axios from "axios";
import React, { useEffect, useState } from "react";
import { ShowTask } from "../Components/ShowTask";

export const Task = () => {
  let url = `https://63f0397dc59531ccf17d0605.mockapi.io/task/Task`;
  const [task, setTask] = useState([]);

  console.log(task);
  useEffect(() => {
    axios.get(url).then((d) => setTask(d.data));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "30px",
      }}
    >
      {/* {task?.map((e) => (
        <ShowTask {...e} />
      ))} */}
      <div className="To Do">
        To do
        {task?.map((e) => (e.status == "To Do" ? <ShowTask {...e} /> : ""))}
      </div>
      <div className="In Progress">
        In Progress
        {task?.map((e) =>
          e.status == "In Progress" ? <ShowTask {...e} /> : ""
        )}
      </div>
      <div className="Done">
        done
        {task?.map((e) => (e.status == "Done" ? <ShowTask {...e} /> : ""))}
      </div>
    </div>
  );
};
