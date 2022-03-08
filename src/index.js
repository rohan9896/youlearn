import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

// import { AuthContextProvider } from "./context/authContext/AuthContext";

render(
  <React.StrictMode>
    {/* <AuthContextProvider> */}
      <Router>
        <App />
      </Router>
    {/* </AuthContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
