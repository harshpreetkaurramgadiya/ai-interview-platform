import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Interview() {
  const location = useLocation();

  const role = location.state?.role;

  if (!role) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center text-2xl">
        Please select a role first
      </div>
    );
  }

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (role) {
      generateQuestions();
    }
  }, [role]);

  useEffect(() => {
  setFeedback("");
  setAnswer("");
}, [currentQuestion]);

  const generateQuestions = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/ai/generate",
        {
          prompt: `Generate 5 interview questions for ${role}.
          Only provide questions.
          Do not provide answers.
          Keep each question in separate line.`
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("AI RESPONSE:", response.data);

      const questionArray = response.data.data
        .split("\n")
        .filter((q) => q.trim() !== "");

      setQuestions(questionArray);

    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const evaluateAnswer = async () => {
    try {

      const response = await axios.post(
        "http://localhost:5000/api/ai/evaluate",
        {
          question: questions[currentQuestion],
          answer: answer,
        }
      );

      console.log(response.data);

      setFeedback(response.data.data);

    } catch (error) {

      console.log(error);

    }
  };

  // 🔴 SAFE GUARD (IMPORTANT)
  if (!role) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-10">
        Please select a role first.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">

      <h1 className="text-4xl font-bold">
        {role} Interview
      </h1>

      {loading ? (
        <p className="mt-10 text-xl">
          Generating AI Questions...
        </p>
      ) : (
        questions.length > 0 && (
          <div className="mt-10 bg-gray-900 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-5">
              Question {currentQuestion + 1} of {questions.length}
            </h2>

            <p className="text-xl text-gray-300">
              {questions[currentQuestion]}
            </p>

            <textarea
              value={answer}
              onChange={(e) =>
                setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full p-4 rounded-lg text-black mt-4"
            ></textarea>

            <button
              onClick={evaluateAnswer}
              className="mt-4 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl mr-4"
            >Submit Answer</button>

            {feedback && (
              <div className="mt-4 bg-gray-800 p-4 rounded-xl">
                <h3 className="font-bold text-lg mb-2">
                  AI Feedback
                </h3>

                <p className="whitespace-pre-wrap">
                  {feedback}
                </p>
              </div>
            )}

            {/* NEXT BUTTON */}
            <button
              onClick={() =>
                setCurrentQuestion((prev) => prev + 1)
              }
              disabled={currentQuestion === questions.length - 1}
              className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl disabled:bg-gray-700"
            >
              Next Question
            </button>

            {/* PREVIOUS BUTTON */}
            <button
              onClick={() =>
                setCurrentQuestion((prev) => prev - 1)
              }
              disabled={currentQuestion === 0}
              className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 ml-4 rounded-xl disabled:bg-gray-700"
            >
              Previous Question
            </button>

          </div>
        )
      )}

    </div>
  );
}

export default Interview;