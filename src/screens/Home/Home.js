import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// BTS
import Button from "react-bootstrap/Button";

const Home = (props) => {
  return (
    <div className="Container">
      <div className="Home-Flex-Row">
        <Link to="/login">
          <Button className="Home-Btn">Login</Button>
        </Link>
        <Link to="/signup">
          <Button className="Home-Btn">Sign-Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
