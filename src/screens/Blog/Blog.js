import React from "react";
import "./Blog.css";

// Components
import BlogCard from "../../components/Blog/BlogCard";

const Blog = (props) => {
  return (
    <div className="Container">
      <h1 className="Blog-Title">Blogging 101</h1>
      <div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
