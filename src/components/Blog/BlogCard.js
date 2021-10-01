import React from "react";
import "./BlogCard.css";

// BTS
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BlogCard = (props) => {
  return (
    <Card className="BlogCard-Container">
      <Card.Header as="h5">Blog Title</Card.Header>
      <Card.Body>
        <Card.Text>Blog Description goes here.</Card.Text>
        <p className="BlogCard-Name">— Name</p>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
