import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <ChakraProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default App;
