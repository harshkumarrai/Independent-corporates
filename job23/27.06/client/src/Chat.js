import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faSmile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import io from "socket.io-client";
import "./Chat.css";
import { Link } from "react-router-dom";

const BASE_URL = "https://job-lxhp.onrender.com";
const socket = io(BASE_URL);

const Chat = () => {
  const [data, setData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState({});
  const [error, setError] = useState(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/myprofile`, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        });
        setUsername(res.data);
      } catch (error) {
        console.error(error);
        setError("Error fetching user data");
      }
    };

    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/getmsg`, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        });
        setMessages(res.data);
      } catch (error) {
        console.error(error);
        setError("Error fetching messages");
      }
    };

    fetchUserData();
    fetchMessages();

    socket.on("message", (messages) => {
      setMessages(messages);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submitHandler(event);
    }
  };

  const changeHandler = (e) => {
    setNewMessage(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) {
      setError("Please enter a message");
      return;
    }

    try {
      await axios.post(
        `${BASE_URL}/addmsg`,
        { text: newMessage, username: username.fullname },
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      setNewMessage("");
      setError(null);
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Error sending message");
    }
  };

  const handleEmojiPicker = () => {
    console.log("Emoji button clicked");
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
      <div className="chat-card">
        <div className="chat-header">
          <h1>Welcome, {username.fullname}!</h1>
        </div>
        <div className="chat-body">
          <div className="chat-container">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <span className="sender">{message.fullname}:</span>
                <span className="content">{message.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-footer">
          <div className="input-container">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={changeHandler}
                onKeyPress={handleKeyPress}
                ref={messageRef}
              />
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
            <button>
              <label htmlFor="attachment">
                <FontAwesomeIcon icon={faPaperclip} />
              </label>
              <input
                id="attachment"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => console.log(e.target.files[0])} // handle file upload if needed
              />
            </button>
            <button onClick={handleEmojiPicker}>
              <FontAwesomeIcon icon={faSmile} />
            </button>
          </div>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default Chat;
