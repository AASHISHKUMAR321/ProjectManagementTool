import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateTask } from "./CreateTask";
import { Home } from "./Home";
import { Task } from "./Task";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/create" element={<CreateTask />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
};

export { AllRoutes };
