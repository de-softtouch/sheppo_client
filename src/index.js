import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
