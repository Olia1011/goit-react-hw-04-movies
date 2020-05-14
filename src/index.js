import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/app/App";

ReactDOM.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <Route component={App}></Route>
    {/* </React.StrictMode> */}
  </BrowserRouter>,
  document.getElementById("root")
);
