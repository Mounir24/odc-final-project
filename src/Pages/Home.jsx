import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    laodUsers();
  }, []);

  const laodUsers = () => {
    axios.get("http://localhost:4000/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  function deleteUser(id) {
    axios.delete(`http://localhost:4000/users/${id}`).then(() => {
      const isConfirm = window.confirm(
        "Are you sure wanna remove this user ? ",
      );
      if (!isConfirm) {
        return alert("Action aborted !");
      }
      alert("User has been deleted");
      laodUsers();
    });
  }

  return (
    <main>
      <h1>Wlecome Home | Users Management CRM (Mockup)</h1>
      <table class="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <div className="actions-btn">
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button>
                  <Link to={`/users/${user.id}`}>View</Link>
                </button>
                <button>
                  <Link to={`/edit/${user.id}`}>Edit</Link>
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Home;
