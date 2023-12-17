"use client";
import React from "react";
import "./blogadd.css";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import RenderResult from "next/dist/server/render-result";

const page = () => {
  const [data, setdata] = useState({
    title: "",
    details: "",
    src:
      "https://cdn.vectorstock.com/i/1000x1000/20/33/icon-science-biology-physics-chemical-logos-vector-26602033.webp",
  });

  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  // Create New User------------------------------
  const submitForm = async (e) => {
    e.preventDefault();
    var res = await fetch("/api/blogs", {
      body: JSON.stringify(data),
      method: "POST",
      headers: { "content-Type": "application/json" },
    });

    res = await res.json();

    if (res.success) {
      alert("Blog Saved!");
      setdata({
        title: "",
        details: "",
      });
    } else {
      alert("Something went wrong!");
    }
  };

  // Get Blogs--------------------

  const [blogs, setblogs] = useState([]);
 

  const getblog = async () => {
    var data = await fetch("/api/blogs");
    data = await data.json();
    setblogs(data);
  };

  useEffect(() => {
    getblog();
  }, []);

  // Delete Blogs----------------------------------

  const deleteblogs = async (userid) => {
    var res = await fetch("/api/blogs", {
      body: JSON.stringify({ id: userid }),
      method: "DELETE",
      headers: { "content-Type": "application/json" },
    });
  };
  // Update Blogs--------------------------------

  const [updateMode, setUpdateMode] = useState(false);
  const [updatingblog, setUpdatingblog] = useState("");

  const setEnvToUpdate = (v) => {
    setUpdateMode(true);
    setdata({
      title: v.title,
      details: v.details,
      src: v.src,
    });
    setUpdatingblog(v._id);
  };

  const updateblog = async (e) => {
    e.preventDefault();
    var res = await fetch("/api/blogs", {
      method: "PUT",
      body: JSON.stringify({ ...data, id: updatingblog }),
      headers: {
        "Content-type": "application/json",
      },
    });

    res = await res.json();
  

    if (res.success) {
      alert("Updated Successfully!");
      setdata({
        title: "",
        details: "",
        src:
          "https://cdn.vectorstock.com/i/1000x1000/20/33/icon-science-biology-physics-chemical-logos-vector-26602033.webp",
      });
    } else {
      alert("Something Went Wrong!");
    }
  };


  return (
    <div className="form-container">
      <form className="form" onSubmit={updateMode ? updateblog : submitForm}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            id="title"
            value={data.title}
            name="title"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="form-group">
          <label>How Can We Help You?</label>
          <textarea
            value={data.details}
            name="details"
            onChange={(e) => changeHandler(e)}
            id="textarea"
            rows="10"
            cols="50"
            required=""
          />
        </div>
        <div className="form-group">
          <label>Add Image</label>
          <input
            type="text"
            id="title"
            value={data.src}
            name="src"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <button className="form-submit-btn" type="submit">
        {updateMode ? "Update" : "Submit"}
        </button>
      </form>

      <div className="showblog">
        {blogs.toReversed().map((v,i) => {
          return (
            <div key={i} className="row">
              <div className="info">
                <img src={v.src} alt="" />
                <div className="text">
                  <h2>{v.title}</h2>
                  <hr />
                  <p>{v.details}</p>
                </div>
              </div>
              <div className="action">
                <button onClick={()=>setEnvToUpdate(v)}>
                  <i className="bx bxs-edit-alt"></i>Update
                </button>
                <button
                  onClick={() => {
                    window.confirm(`Are you sure to Delete ${v.title}`) &&
                      deleteblogs(v._id);
                  }}
                >
                  <i  className="bx bxs-trash-alt"></i>Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
