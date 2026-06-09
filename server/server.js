import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Routes
import interviewRoutes from "./routes/interviewRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug logs (optional but helpful)
console.log("SERVER STARTING");
console.log("AUTH ROUTES LOADED");

// Routes
app.use("/api/interview", interviewRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);

console.log("AUTH ROUTES MOUNTED");

// Home route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});