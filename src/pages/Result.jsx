function Result() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Interview <span className="text-blue-400">Result</span>
        </h1>

        <p className="text-gray-400 mt-4">
          Your AI interview performance summary
        </p>
      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-gray-400 text-lg">Questions</h2>
          <p className="text-4xl font-bold mt-3">10</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-gray-400 text-lg">Attempted</h2>
          <p className="text-4xl font-bold mt-3 text-green-400">8</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-gray-400 text-lg">Score</h2>
          <p className="text-4xl font-bold mt-3 text-blue-400">82%</p>
        </div>

      </div>

      {/* AI Feedback */}
      <div className="bg-gray-900 mt-14 p-8 rounded-2xl border border-gray-800">

        <h2 className="text-3xl font-bold">
          AI Feedback
        </h2>

        <div className="mt-6 space-y-4">

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-green-400 font-semibold">
              Strengths
            </h3>

            <p className="text-gray-300 mt-2">
              Good understanding of React fundamentals and problem-solving skills.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-yellow-400 font-semibold">
              Improvements
            </h3>

            <p className="text-gray-300 mt-2">
              Improve communication clarity and optimize coding explanations.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Result