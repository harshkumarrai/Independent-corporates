import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faPencilAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

// Define the base URL
const BASE_URL = "https://job-lxhp.onrender.com";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    skill: "",
    password: "",
    confirmpassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Ensure passwords match
    if (data.password !== data.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    axios
      .post(`${BASE_URL}/register1`, data)
      .then((res) => {
        console.log(res.data);
        setSuccessMessage("You have registered successfully");
        alert("You have registered successfully");
        navigate("/login1"); // Redirect to login page after successful registration
      })
      .catch((err) => {
        console.error("Error registering:", err);
        setSuccessMessage("");
      });
  };

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
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <FontAwesomeIcon icon={faUser} /> Create Your Account
        </p>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <input
                type="text"
                placeholder="Name"
                name="fullname"
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
                  <FontAwesomeIcon icon={faPhone} />
                </span>
              </div>
              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
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
                  <FontAwesomeIcon icon={faPencilAlt} />
                </span>
              </div>
              <input
                type="text"
                placeholder="Skill"
                name="skill"
                onChange={changeHandler}
                required
                className="form-control"
              />
            </div>
            <small className="form-text">
              Please provide skills separated by commas
            </small>
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
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                onChange={changeHandler}
                required
                className="form-control"
              />
            </div>
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        {successMessage && <p className="my-1">{successMessage}</p>}
        <p className="my-1">
          Already have an account? <Link to="/login1">Sign In</Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
