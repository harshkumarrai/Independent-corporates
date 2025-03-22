import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Myprofile.css";

const Myprofile = () => {
  const [data, setData] = useState(null);
  const [review, setReview] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://job-lxhp.onrender.com/myprofile", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data));

    axios
      .get("https://job-lxhp.onrender.com/myreview", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setReview(res.data));
  }, []);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login1" />;
  }

  const handleViewProfile = (id) => {
    navigate(`/indprofile/${id}`);
  };

  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i>Independent Corporate
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/myprofile">Myprofile</Link>
          </li>
          <li>
            <Link to="/login1">Logout</Link>
          </li>
        </ul>
      </nav>
      {data && (
        <section className="container">
          <Link to="/myprofile" className="btn btn-light">
            Back to profiles
          </Link>
          <div className="profile-grid my-1">
            <div className="profile-top bg-primary p-2">
              <img
                className="round-img"
                src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png"
                alt=""
              />
              <h1 className="large">{data.fullname}</h1>
              <p className="lead">{data.email}</p>
              <p>{data.mobile}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleViewProfile(data._id)}
              >
                View Profile
              </button>
            </div>
            <div className="profile-github">
              <h2 className="text-primary my-1">
                <i className="fab fa-github"></i>Reviews and Ratings
              </h2>
              <div className="repo bg-white p-1 my-1">
                {review &&
                  review.map((review) => (
                    <div key={review._id}>
                      <h4>{review.taskprovider}</h4>
                      <p>{review.rating}/5</p>
                    </div>
                  ))}
              </div>
              <div className="repo bg-white p-1 my-1">
                <div>
                  <h4>Enter your reviews</h4>
                  <form className="form">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Enter Your rating out of 5"
                        name="rating"
                        required
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Add Rating"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Myprofile;
