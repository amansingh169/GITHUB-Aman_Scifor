import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Welcome } from "./components/Welcome.jsx";
import { HelloComponent } from "./components/HelloComponent.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Welcome name="Aman" />
    <HelloComponent />
  </StrictMode>
);
