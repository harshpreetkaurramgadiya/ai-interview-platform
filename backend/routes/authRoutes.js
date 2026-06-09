// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // 🔥 AUTO REGISTER + LOGIN (ONE API)
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;


//     // 1. check if user exists
//     let user = await User.findOne({ email });

//     // 2. if not exist → auto register
//     if (!user) {
//       const hashedPassword = await bcrypt.hash(password, 10);

//       user = await User.create({
//         name:"User",
//         email,
//         password: hashedPassword,
//       });
//     }

//     // 3. check password
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // 4. generate token
//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     // 5. response
//     res.json({
//       success: true,
//       message: "Login Successful",
//       token,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// module.exports = router;
// ``

const express = require("express");
const router = express.Router();

const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ================= REGISTER =================

router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // CHECK EXISTING USER
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Account Created Successfully",
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});


// ================= LOGIN =================

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // FIND USER
    const user = await User.findOne({ email });

    // USER NOT FOUND
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // GENERATE TOKEN
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // SUCCESS RESPONSE
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

module.exports = router;