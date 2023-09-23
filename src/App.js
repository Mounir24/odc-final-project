import { Routes, Route } from "react-router-dom";
// IMPORT BOOTSTRAP v4.6
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// Componenets
import Add from "./components/Add";
import Edit from "./components/Edit";
import Users from "./components/Users";
// PAGES
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/users/:id" element={<Users />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
