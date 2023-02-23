import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./Components/Theme";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <DragDropContext>
        <App />
      </DragDropContext>
    </BrowserRouter>
  </ChakraProvider>
);
