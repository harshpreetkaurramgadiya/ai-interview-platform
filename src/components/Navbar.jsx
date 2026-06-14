import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate= useNavigate();
  const handleLogin=()=>{
    console.log("Login button clicked");
    navigate("/login");
  };
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-gray-950 text-white">

      <h1 className="text-2xl font-bold">
        AI Interview
      </h1>

     <ul className="flex gap-8 text-gray-300">

  <li>
    <a href="#home" className="hover:text-white cursor-pointer">
      Home
    </a>
  </li>

  <li>
    <a href="#features" className="hover:text-white cursor-pointer">
      Features
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-white cursor-pointer">
      About
    </a>
  </li>

</ul>

      {/* <button 
      onClick={handleLogin}
      className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg">
        Login
      </button> */}

    </nav>
  )
}

export default Navbar