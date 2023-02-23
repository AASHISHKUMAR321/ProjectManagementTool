import { Spinner, Box } from "@chakra-ui/react";
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
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        alignContent={"center"}
      />
    );
  }

  return (
    <Box className="App">
      <Home />
      <AllRoutes />
    </Box>
  );
}

export default App;
