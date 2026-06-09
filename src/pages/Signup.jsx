import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(response.data);

      alert("Account Created Successfully");

      navigate("/");

    } catch (error) {

      console.log(error.response?.data);

      alert(error.response?.data?.message || "Signup Failed");

    }

  };

  return (

    <div className="min-h-screen bg-gray-950 flex items-center justify-center">

      <div className="bg-gray-900 p-10 rounded-2xl w-[400px] flex flex-col gap-4">

        <h1 className="text-4xl font-bold text-white text-center">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="border border-gray-700 bg-white text-black p-3 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="border border-gray-700 bg-white text-black p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="border border-gray-700 bg-white text-black p-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Create Account
        </button>

      </div>

    </div>

  );
}

export default Signup;