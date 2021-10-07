import React, { useState, useEffect } from "react";
import "./AddBlog.css";
import { useHistory } from "react-router";
import axios from 'axios';
import { Link } from "react-router-dom";

// BTS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Spinner } from 'react-bootstrap';

const AddBlog = (props) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    title: '',
    description: '',
    user: `${localStorage.getItem('id')}`,
  });
  const [message, setMessage] = useState({
    color: 'red',
    message: '',
  });

  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('token')){
      history.push('/');
    }
  });

  const postBlog = async() => {
    setLoading(true);
    setMessage({
      ...message,
      message: '',
    })
    try {
      const data = JSON.stringify({
        "user": "615e7ea1b1c94466795a3ca0",
        "title": "Kratos returns",
        "description": "GOW 2022"
      });
      console.log(values);
  
      const config = {
        method: "post",
        url: "https://simple-blog-site-workshop.herokuapp.com/posts/create-post",
        headers: {
          'auth-token': `${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        data: data,
      };

      const response = await axios(config);
      console.log(response.data);
      if (response.data.createdAt) {
        setLoading(false);
        setMessage({
          color: 'green',
          message: 'Blog has been posted',
        });
        setValues({
          ...values,
          title: '',
          description: '',
        })
      }
    } catch(error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        history.push('/');
      }
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog();
  }

  return (
    <div className="Login-Container">
      <div className="AddBlog-Form">
        <div className="AddBlog-Title">
          <h1>Add a Blog</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control name="title" type="text" placeholder="Enter title" onChange={handleChange} required value={values.title}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Blog Description</Form.Label>
            <Form.Control
              name="description"
              onChange={handleChange}
              type="text"
              as="textarea"
              placeholder="Enter description"
              required
              value={values.description}
            />
            <Form.Text className="text-muted">Express yourself.</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="flexBox loader-div" style={{ width: '100%' }}>
        <div className="Signup-Loader flexBox">
          {loading && <Spinner animation="border" variant="primary" />}
          <small style={{ color: message.color, textAlign: 'center' }}>{message.message}</small>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
