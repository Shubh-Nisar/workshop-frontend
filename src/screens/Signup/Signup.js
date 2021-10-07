import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

// BTS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Spinner } from 'react-bootstrap';

const Signup = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    color: 'red',
    message: '',
  });

  const Register = async () => {
    setLoading(true);
    setMessage({
      ...message,
      message: '',
    })
    try {
      const data = JSON.stringify(values);

      const config = {
        method: "post",
        url: "https://simple-blog-site-workshop.herokuapp.com/users/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios(config);
      console.log(response.data);
      if (response.data.createdAt) {
        setLoading(false);
        setMessage({
          color: 'green',
          message: 'account has been created, login',
        })
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setMessage({
        color: 'red',
        message: 'An account of this email has already been created'
      })
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
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
            <Form.Control
              name="name"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Enter Name"
              value={values.name}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => handleChange(e)}
              placeholder="Enter email"
              value={values.email}
              name="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => handleChange(e)}
              value={values.password}
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="flexBox loader-div">
        <small className="mt-2 text-start container-fluid">
          Already have an account? <Link to="/">Login</Link>
        </small>
        <div className="Signup-Loader flexBox">
          {loading && <Spinner animation="border" variant="primary" />}
          <small style={{ color: message.color, textAlign: 'center' }}>{message.message}</small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
