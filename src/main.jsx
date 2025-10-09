import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css"; // or adjust to your actual css path

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
