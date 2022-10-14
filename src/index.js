import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App"; //app já é um componente criado automaticamente

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //sintaxe jsx
  <StrictMode>
    <App />
  </StrictMode>
);
