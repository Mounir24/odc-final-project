import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();
  const [profile, setProfile] = useState({});

  const fetchProfile = () => {
    axios.get(`http://localhost:4000/users/${id}`).then((res) => {
      setProfile(res.data);
    });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile Details: </h1>
      <ul>
        {profile ? (
          <div>
            <li>name: {profile.name}</li>
            <li>email: {profile.email}</li>
            <li>phone: {profile.phone}</li>
            <li>ID: {profile.id}</li>
          </div>
        ) : (
          <h1>No Profile Founded !</h1>
        )}
      </ul>
    </div>
  );
}

export default Users;
