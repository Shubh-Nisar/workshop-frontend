import React from "react";
import "./Blog.css";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

// Components
import BlogCard from "../../components/Blog/BlogCard";

const Blog = (props) => {
  const history = useHistory()

  return (
    <div className="Container Blog-Container">
      <h1 className="Blog-Title">Blogging 101</h1>
      <div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Button className="Blog-button" variant="primary" onClick={() => history.push('/add-blog')}>Add Blog</Button>
    </div>
  );
};

export default Blog;
