import React from "react";
import "./AddBlog.css";

// BTS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddBlog = (props) => {
  return (
    <div className="Container">
      <div className="AddBlog-Form">
        <div className="AddBlog-Title">
          <h1>Add a Blog</h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Blog Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              placeholder="Enter description"
            />
            <Form.Text className="text-muted">Express yourself.</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddBlog;
