function Features() {
  return (
    <section id="features" className="bg-gray-900 text-white py-20 px-10">

      <h2 className="text-4xl font-bold text-center">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        <div className="bg-gray-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">
            AI Questions
          </h3>

          <p className="text-gray-400 mt-3">
            Generate smart interview questions instantly.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">
            Real-time Feedback
          </h3>

          <p className="text-gray-400 mt-3">
            Get instant AI feedback on your answers.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">
            Voice Interview
          </h3>

          <p className="text-gray-400 mt-3">
            Practice speaking interviews with AI.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">
            Performance Score
          </h3>

          <p className="text-gray-400 mt-3">
            Track your interview performance easily.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Features