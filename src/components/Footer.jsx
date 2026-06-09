function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-10 px-10 border-t border-gray-800">

      <div className="flex flex-col md:flex-row justify-between items-center">

        <h1 className="text-2xl font-bold">
          AI Interview
        </h1>

        <ul className="flex gap-6 mt-5 md:mt-0 text-gray-400">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">About</li>
        </ul>

      </div>

      <p className="text-center text-gray-500 mt-8">
        © 2026 AI Interview Simulator. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer