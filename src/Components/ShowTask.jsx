import React, { useRef } from "react";

export const ShowTask = ({
  TaskName,
  Summary,
  status,
  Assignee,
  dueDate,
  Priority,
  id,
}) => {
  let div_id = useRef(null);

  return (
    <ul
      style={{
        listStyle: "none",
        fontSize: "12px",
        margin: "auto",
        border: "1px solid white",
      }}
      key={id}
      draggable
      onDragStart={(e) => console.log(e.target)}
      onDragEnterCapture={(e) => console.log("enter", e.target)}
      onDragEnd={() => console.log("end")}
    >
      <li>{id}</li>
      <li>TaskName-{TaskName}</li>
      <li>Summary-{Summary}</li>
      <li>Status-{status}</li>
      <li>Assignee-{Assignee}</li>
      <li>dueDate-{dueDate}</li>
      <li>Priority-{Priority}</li>
    </ul>
  );
};
