require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Routes
const interviewRoutes = require("./routes/interviewRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

console.log("SERVER STARTING");

// Routes
app.use("/api/interview", interviewRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);

console.log("AUTH ROUTES MOUNTED");

// Home
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});