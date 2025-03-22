import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

// Define the base URL
const BASE_URL = "https://job-lxhp.onrender.com";

const Profile = ({ profile }) => (
  <div className="profile bg-light">
    <img
      className="round-img"
      src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png"
      alt={`${profile.name || "John Doe"}'s profile`}
    />
    <div>
      <h2>{profile.fullname}</h2>
      <p>{profile.email}</p>
      <p>{profile.mobile}</p>
      <p>{profile.skill}</p>
      <Link
        to={`/indprofile/${profile.fullname}/${profile.email}/${profile.mobile}/${profile._id}`}
        className="btn btn-primary"
      >
        View Profile
      </Link>
    </div>
  </div>
);

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/allprofiles`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error("Error fetching profiles:", err);
      });
  }, []);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login1" />;
  }

  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> Independent Corporate
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/myprofile">My Profile</Link>
          </li>
          <li>
            <Link to="/Chat">Chat</Link>
          </li>
          <li>
            <Link to="/login1" onClick={() => localStorage.removeItem("token")}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <section className="container">
        <h1 className="large text-primary">Employers</h1>
        <p className="lead">
          <i className="fab fa-connectdevelop"></i> Browse and connect with
          Employers
        </p>
        <div className="profiles">
          {data.length > 0 ? (
            data.map((profile, index) => (
              <Profile key={index} profile={profile} />
            ))
          ) : (
            <p>No profiles found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
