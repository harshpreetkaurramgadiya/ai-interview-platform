// const Interview= require("../models/Interview")
// const express = require("express")

// const router = express.Router()

// router.post("/", async (req, res) => {

//   try {

//     const newInterview = new Interview(req.body)

//     await newInterview.save()

//     res.status(201).json({
//       message: "Interview Saved Successfully ✅",
//       data: newInterview
//     })

//   } catch (error) {

//     res.status(500).json({
//       message: error.message
//     })

//   }

// })
// module.exports = router

 require("dotenv").config();

// console.log("API KEY=", process.env.GEMINI_API_KEY);

const express = require("express");
const router = express.Router();
const Interview = require("../models/Interview");

// Save interview to DB
router.post("/", async (req, res) => {
  try {
    const newInterview = new Interview(req.body);

    await newInterview.save();

    res.status(201).json({
      success: true,
      message: "Interview Saved Successfully ✅",
      data: newInterview
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;