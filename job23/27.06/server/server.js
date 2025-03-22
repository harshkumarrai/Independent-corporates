const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const dev = require("./devmodel");
const Review = require("./reviewmodel");
const Msgmodel = require("./Msgmodel");
const middleware = require("./middleware");
const path = require("path");

const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "https://job-lxhp.onrender.com", // Adjust the origin as per your client's URL
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: "https://job-lxhp.onrender.com", // Adjust this to match your frontend URL
  })
);
app.use(express.json());

// Connect to MongoDB
// const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Venkatesh:Venkatesh@cluster0.qyag75y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // serverSelectionTimeoutMS: 5000, // Increase this value if needed
      }
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

connectDB();

// Your Express setup and other configurations go here

// User Registration
app.post("/register1", async (req, res) => {
  const { fullname, email, mobile, skill, password } = req.body;
  try {
    const newUser = new dev({ fullname, email, mobile, skill, password });
    await newUser.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).send("Server Error");
  }
});

// User Login
app.post("/login1", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await dev.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, "jwtPassword", { expiresIn: 36000000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).send("Server Error");
  }
});

// Get all profiles
app.get("/allprofiles", middleware, async (req, res) => {
  try {
    const allProfiles = await dev.find();
    res.json(allProfiles);
  } catch (err) {
    console.error("Error fetching all profiles:", err);
    res.status(500).send("Server Error");
  }
});

// Get user profile by ID
app.get("/profile/:id", middleware, async (req, res) => {
  try {
    const user = await dev.findById(req.params.id);
    if (!user) return res.status(404).send("User Not Found");
    res.json(user);
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).send("Server Error");
  }
});

// Get my profile
// Get my profile
app.get("/myprofile", middleware, async (req, res) => {
  try {
    const user = await dev.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).send("Server Error");
  }
});
// Get reviews for a user
app.get("/reviews/:id", middleware, async (req, res) => {
  try {
    const reviews = await Review.find({ taskworker: req.params.id });
    res.json(reviews);
  } catch (err) {
    console.error("Error fetching reviews:", err);
    res.status(500).send("Server Error");
  }
});

// Add a review
app.post("/reviews", middleware, async (req, res) => {
  try {
    const { taskworker, rating } = req.body;
    const user = await dev.findById(req.user.id);
    const newReview = new Review({
      taskprovider: user.fullname,
      taskworker,
      rating,
    });
    await newReview.save();
    res.status(200).send("Review added successfully");
  } catch (err) {
    console.error("Error adding review:", err);
    res.status(500).send("Server Error");
  }
});

// Get user info
app.get("/getuser", middleware, async (req, res) => {
  try {
    const user = await dev.findById(req.user.id);
    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).send("Server Error");
  }
});

// Add a message
app.post("/addmsg", middleware, async (req, res) => {
  try {
    const { text } = req.body;
    const user = await dev.findById(req.user.id);
    const newMsg = new Msgmodel({
      user: req.user.id,
      fullname: user.fullname,
      text,
    });

    await newMsg.save();
    const allMsg = await Msgmodel.find();
    io.emit("message", allMsg);
    res.json(allMsg);
  } catch (err) {
    console.error("Error adding message:", err);
    res.status(500).send("Server Error");
  }
});

// Get messages
app.get("/getmsg", middleware, async (req, res) => {
  try {
    const allMsg = await Msgmodel.find();
    res.json(allMsg);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).send("Server Error");
  }
});

// Socket.io connection
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// Start server
http.listen(4000, () => {
  console.log("Server running on port 4000");
});
