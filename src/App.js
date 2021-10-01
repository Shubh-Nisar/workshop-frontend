import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Screens
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import Blog from "./screens/Blog/Blog";
import AddBlog from "./screens/AddBlog/AddBlog";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Signup} path="/signup" />
        <Route component={Blog} path="/blog" />
        <Route component={AddBlog} path="/add-blog" />
        <Route component={Home} path="/" />
      </Switch>
    </Router>
  );
};

export default App;
