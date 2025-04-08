import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Board from "./pages/Board";
import FAQ from "./pages/FAQ";
import Login from "./pages/login"; 
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem("user", JSON.stringify(username));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <NavBar user={user} onLogout={handleLogout} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/board" element={<Board user={user} />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pet" element={<Pets />} />
          <Route path="/pet/abandoned" element={<Pets />} />
          <Route path="/pet/fish" element={<Pets />} />
          <Route path="/pet/reptile" element={<Pets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;