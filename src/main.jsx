import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "../src/Context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </>
);