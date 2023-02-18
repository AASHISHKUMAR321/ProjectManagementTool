import { useEffect, useReducer, usevalue, useState } from "react";
import "./App.css";
import { Welcome } from "./Components/Welcome";

import { AllRoutes } from "./Routes/AllRoutes";
import { Home } from "./Routes/Home";

function App() {
  const [count, setCount] = useState(true);

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
      <Home />
      <AllRoutes />
    </div>
  );
}

export default App;
