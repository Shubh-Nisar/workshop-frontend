import React, { useState } from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';

// BTS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Signup = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const [error, setError] = useState(' ');

  const Register = async() => {
    try {
      const data = JSON.stringify(values);
  
      const config = {
        method: 'post',
        url: 'https://simple-blog-site-workshop.herokuapp.com/users/sig',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
  
      const response = await axios(config);
      console.log(response.data);

    } catch(error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Register();
  };

  return (
    <div className="Login-Container">
      <div className="Signup-Form">
        <div className="Signup-Title">
          <h1>Sign-Up</h1>
        </div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" onChange={(e) => handleChange(e)} type="text" placeholder="Enter Name" value={values.name} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={(e) => handleChange(e)} placeholder="Enter email" value={values.email} name="email" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e) => handleChange(e)} value={values.password} name="password" placeholder="Password" required/>
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

export default Signup;
