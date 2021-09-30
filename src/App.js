import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Screens
import Home from "./screens/Home";

// Components
import Login from "./screens/Login/Login";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Home} path="/" />
      </Switch>
    </Router>
  );
};

export default App;
