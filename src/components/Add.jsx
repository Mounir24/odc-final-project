import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [profile, setProfile] = useState({});
  const navigateTo = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(profile);
    axios
      .post("http://localhost:4000/users", profile)
      .then((response) => {
        if (response) {
          alert("NEW USER PROFILE HAS BEEN CREATED!");
          navigateTo("/");
        }
      })
      .catch((err) => {
        alert(err.message);
        return console.log(err);
      });
  };
  return (
    <div className="add-profile-form">
      <h1>Create New User Profile: </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={profile.name}
          placeholder="enter your name"
          className="form-control"
        ></input>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={profile.email}
          placeholder="enter your email"
          className="form-control"
        ></input>
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={profile.phone}
          placeholder="enter your phone"
          className="form-control"
        ></input>
        <button type="submit">Submit Profile</button>
      </form>
    </div>
  );
}

export default Add;
