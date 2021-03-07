import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StateProvider } from "./contexts/StateProvider";
import reducer, { initialState } from "./contexts/reducer";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
