// const express = require("express");
// const router= express.Router();

// const {generateQuestions}= require("../controllers/aiController");

// router.post("/generate-questions",generateQuestions);

// module.exports= router;

const express = require("express");
const router = express.Router();

const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

router.post("/generate", async (req, res) => {
  try {

    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "user",
          content: req.body.prompt,
        },
      ],
    });

    res.json({
      success: true,
      data: completion.choices[0].message.content,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

module.exports = router;