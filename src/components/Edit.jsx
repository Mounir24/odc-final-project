import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const [profile, setProfile] = useState({});
  const { id } = useParams();
  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/users/${id}`, profile)
      .then((response) => {
        if (response.data) {
          alert("User profile has been updated !");
          navigateTo("/");
          return;
        }
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${id}`).then((response) => {
      setProfile({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
      });
    });
  }, []);

  return (
    <section className="edit-profile-form">
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
        <button type="submit">Update Profile</button>
      </form>
    </section>
  );
}

export default Edit;
