import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Indprofile.css";

const BASE_URL = "https://job-lxhp.onrender.com";

const Indprofile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(null);
  const [taskprovider, setTaskProvider] = useState(null);

  useEffect(() => {
    // Fetch profile data by ID
    axios
      .get(`${BASE_URL}/profile/${id}`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.error("Error fetching profile:", err));

    // Fetch reviews for the profile
    axios
      .get(`${BASE_URL}/reviews/${id}`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${BASE_URL}/myprofile`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      setTaskProvider(res.data.fullname);

      const review = {
        taskprovider: res.data.fullname,
        taskworker: id,
        rating,
      };

      await axios.post(`${BASE_URL}/reviews`, review, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });

      // Update the reviews state directly
      setReviews([...reviews, review]);
    } catch (err) {
      console.error("Error submitting review:", err);
      alert(
        "An error occurred while submitting your review. Please try again later."
      );
    }
  };

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
            <Link to="/login1">Logout</Link>
          </li>
        </ul>
      </nav>
      <section className="container">
        <Link to="/myprofile" className="btn btn-light">
          Back to profiles
        </Link>
        <div className="profile-grid my-1">
          <div className="profile-top bg-primary p-2">
            <img
              className="round-img"
              src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png"
              alt={`${profile.fullname}'s profile`}
            />
            <h1 className="large">{profile.fullname}</h1>
            <p className="lead">{profile.email}</p>
            <p>{profile.mobile}</p>
          </div>
          <div className="profile-github">
            <h2 className="text-primary my-1">
              <i className="fab fa-github"></i>Reviews and Ratings
            </h2>
            <div className="repo bg-white p-1 my-1">
              {reviews.map((review) => (
                <div key={review._id}>
                  <h4>{review.taskprovider}</h4>
                  <p>{review.rating}/5</p>
                </div>
              ))}
            </div>
            <div className="repo bg-white p-1 my-1">
              <div>
                <h4>Enter your reviews</h4>
                <form className="form" onSubmit={submitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Enter Your rating out of 5"
                      name="rating"
                      value={rating || ""}
                      onChange={(e) => setRating(e.target.value)}
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
    </div>
  );
};

export default Indprofile;
