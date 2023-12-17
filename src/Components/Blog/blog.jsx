"use client";
import React from "react";
import "./blog.css";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

const blog = () => {
  const [blogs, setblogs] = useState([]);

  const getblog = async () => {
    var data = await fetch("/api/blogs");
    data = await data.json();
    setblogs(data);
  };

  useEffect(() => {
    getblog();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {blogs.toReversed().map((v, i) => {
            return (
              <Fade key={i} left big cascade>
                <div className="col-md-4">
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <a href="#">
                        <img className="img" src={v.src} />
                      </a>
                      <div className="ripple-cont"></div>
                    </div>
                    <div className="blog-table">
                      <h6 className="blog-category blog-text-success">
                        <i className="far fa-newspaper"></i> News
                      </h6>
                      <h4 className="blog-card-caption">
                        <a href="#">{v.title}</a>
                      </h4>
                      <p className="blog-card-description">{v.details}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default blog;
