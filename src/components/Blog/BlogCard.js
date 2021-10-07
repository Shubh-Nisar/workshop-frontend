import React from "react";
import "./BlogCard.css";

// BTS
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

const BlogCard = ({title, description}) => {
  return (
    <Card className="BlogCard-Container">
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <p className="BlogCard-Name">— Don</p>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
