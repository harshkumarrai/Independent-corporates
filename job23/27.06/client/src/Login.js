import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

// Define the base URL
const BASE_URL = "https://job-lxhp.onrender.com";

const Login = () => {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/login1`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuth(true);
      })
      .catch((err) => {
        console.error("Error logging in:", err);
        if (err.response && err.response.data) {
          alert(`Error: ${err.response.data.msg}`);
        } else {
          alert("An error occurred while logging in. Please try again later.");
        }
      });
  };

  if (auth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <FontAwesomeIcon icon={faUser} /> Independent Corporate
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/register1">Register</Link>
          </li>
          <li>
            <Link to="/login1">Login</Link>
          </li>
        </ul>
      </nav>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <FontAwesomeIcon icon={faUser} /> Sign into Your Account
        </p>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={changeHandler}
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={changeHandler}
                required
                className="form-control"
              />
            </div>
          </div>
          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register1">Sign Up</Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
