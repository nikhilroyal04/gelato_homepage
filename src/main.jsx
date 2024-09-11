import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routes";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
