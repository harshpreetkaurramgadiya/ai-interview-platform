const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateQuestions = async (req, res) => {

  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });

    const prompt = req.body.prompt;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response.text();

    res.status(200).json({
      success: true,
      data: text,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = { generateQuestions };