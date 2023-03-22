import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
