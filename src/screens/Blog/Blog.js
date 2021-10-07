import React, { useEffect, useState } from "react";
import "./Blog.css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import axios from 'axios';

// Components
import BlogCard from "../../components/Blog/BlogCard";
import { Spinner } from "react-bootstrap";

const Blog = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const GetBlogs = async() => {
      try {
        const config = {
          method: 'get',
          url: 'https://simple-blog-site-workshop.herokuapp.com/posts/',
          headers: {
            'auth-token': `${localStorage.getItem('token')}`
          }
        };
    
        const response = await axios(config);
        console.log(response.data);
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('id');
          history.push('/');
        }
      }
    }
    if (!localStorage.getItem('token')){
      history.push('/');
    } else {
      GetBlogs();
    }
  }, [history])

  return (
    <div className="Container Blog-Container">
      <h1 className="Blog-Title">Blogging 101</h1>
      {
        loading
        ?
        <div className="flexBox">
          <Spinner animation="border" variant="primary" />
        </div>
        :
        <div>
          {
            blogs.length !== 0
            &&
            <>
            {blogs.map((blog) => {
              return (
                <BlogCard title={blog.title} description={blog.description} key={blog.id}/>
              )
            })}
            </>
          }
        </div>
      }     
      <Button
        className="Blog-button"
        variant="primary"
        onClick={() => history.push("/add-blog")}
      >
        Add Blog
      </Button>
    </div>
  );
};

export default Blog;
