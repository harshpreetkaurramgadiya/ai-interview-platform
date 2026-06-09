import { Link } from "react-router-dom"
function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-6xl font-bold leading-tight">
        Practice Interviews
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {" "}Smarter
        </span>
      </h1>

      <p className="mt-6 text-gray-400 max-w-2xl text-lg">
        AI-powered mock interviews with real-time feedback,
        voice interaction, and personalized questions.
      </p>

      <div className="mt-8 flex gap-4">

        <a href="#roles">

        {/* <Link to="/interview"> */}

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-semibold">
          Start Interview
        </button>
         
         </a>

        {/* </Link> */}

        <a href="#roles">
       
        <button className="border border-gray-600 hover:border-white px-6 py-3 rounded-xl text-lg">
          Explore Roles
        </button>

        </a>

      </div>

    </section>
  )
}

export default Hero