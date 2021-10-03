import React from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';

// BTS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = (props) => {
  return (
    <div className="Login-Container">
      <div className="Signup-Form">
        <div className="Signup-Title">
          <h1>Sign-Up</h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <small>
        Already have an account? <Link to="/">Login</Link>
      </small>
    </div>
  );
};

export default Login;
