import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div  className="container">
      <div className="header">
        <h1>Welcome to the Online Bookstore</h1>
      </div>
      <div className="navbar">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
};

export default HomePage;
