import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App/App";

ReactDOM.render(
  <BrowserRouter>
      <Route component={App}></Route>
   </BrowserRouter>,
  document.getElementById("root")
);
