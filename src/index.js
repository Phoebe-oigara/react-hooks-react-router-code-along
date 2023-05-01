import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route , NavLink} from "react-router-dom";
import App from "./components/App";



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);



