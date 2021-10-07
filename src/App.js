import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Screens
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import Blog from "./screens/Blog/Blog";
import AddBlog from "./screens/AddBlog/AddBlog";
import Test from "./components/Test";

import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./components/Navbar/Appbar";

const App = () => {
  return (
    <>
      <Router>
        <Appbar />
        <Switch>
          <Route component={Signup} path="/signup" />
          <Route component={Blog} path="/blog" />
          <Route component={AddBlog} path="/add-blog" />
          <Route component={Test} path="/test" />
          <Route component={Login} path="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
