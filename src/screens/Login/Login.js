import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

// BTS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

const Login = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    color: 'red',
    message: '',
  });

  const history = useHistory();

  const Signin = async () => {
    setLoading(true);
    setMessage({
      ...message,
      message: '',
    })
    try {
      const data = JSON.stringify(values);

      const config = {
        method: "post",
        url: "https://simple-blog-site-workshop.herokuapp.com/users/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios(config);
      console.log(response.data);
      if (response.data.token) {
        setLoading(false);
        localStorage.setItem('token', response.data.token);
        history.push('/blog')
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setMessage({
        color: 'red',
        message: 'Invalid Credentials'
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
    Signin();
  };

  return (
    <div className="Login-Container">
      <div className="Login-Form">
        <div className="Login-Title">
          <h1>Login</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
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
          Don't have an account? <Link to="/signup">SignUp</Link>
        </small>
        <div className="Signup-Loader flexBox">
          {loading && <Spinner animation="border" variant="primary" />}
          <small style={{ color: message.color, textAlign: 'center' }}>{message.message}</small>
        </div>
      </div>
    </div>
  );
};

export default Login;
