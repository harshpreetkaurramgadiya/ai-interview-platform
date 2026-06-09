// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       // console.log("LOGIN CLICKED");

//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );

//       console.log("LOGIN SUCCESS:", response.data);

//       // save token
//       localStorage.setItem("token", response.data.token);

//       navigate("/home");

//       alert(response.data.message || "Login Successful");

//       // redirect after login
//       navigate("/home");

//     } catch (error) {
//       // console.log("LOGIN ERROR:", error.response?.data || error.message);

//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4 p-10">

//       <h1 className="text-3xl font-bold">Login</h1>

//       <input
//         type="email"
//         placeholder="Enter Email"
//         className="border p-2"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Enter Password"
//         className="border p-2"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button
//         onClick={handleLogin}
//         className="bg-blue-500 text-white px-5 py-2 rounded"
//       >
//         Login
//       </button>

//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async () => {

//     try {

//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );

//       console.log("LOGIN SUCCESS:", response.data);

//       // SAVE TOKEN
//       localStorage.setItem("token", response.data.token);

//       // CLEAR INPUTS
//       setEmail("");
//       setPassword("");

//       // REDIRECT TO HOME
//       navigate("/home");

//     } catch (error) {

//       console.log("LOGIN ERROR:", error.response?.data);

//       alert(error.response?.data?.message || "Login failed");

//     }

//   };

//   return (

//     <div className="min-h-screen bg-gray-950 flex items-center justify-center">

//       <div className="bg-gray-900 p-10 rounded-2xl w-[400px] flex flex-col gap-4">

//         <h1 className="text-3xl font-bold text-white text-center">
//           Login
//         </h1>

//         <input
//           type="Email"
//           placeholder="Enter Email"
//           autoComplete="off"
//           className="border border-gray-700 bg-gray-800 text-white p-3 rounded-lg"
//           value={email}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           autoComplete="off"
//           className="border border-gray-700 bg-gray-800 text-white p-3 rounded-lg"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
//         >
//           Login
//         </button>

//       </div>

//     </div>

//   );
// };

// export default Login;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log("LOGIN SUCCESS:", response.data);

      // SAVE TOKEN
      localStorage.setItem("token", response.data.token);

      // CLEAR INPUTS
      setEmail("");
      setPassword("");

      // REDIRECT
      navigate("/home");

    } catch (error) {

      console.log("LOGIN ERROR:", error.response?.data?.message);

      alert(error.response?.data?.message || "Login failed");

    }

  };

  return (

    <div className="min-h-screen bg-gray-950 flex items-center justify-center">

      <div
        className="bg-gray-900 p-10 rounded-2xl w-[400px] flex flex-col gap-4"
        autoComplete="off"
      >

        <h1 className="text-4xl font-bold text-white text-center">
          Login
        </h1>

        {/* FAKE HIDDEN INPUTS */}
        <input
          type="text"
          name="fakeusernameremembered"
          style={{ display: "none" }}
        />

        <input
          type="password"
          name="fakepasswordremembered"
          style={{ display: "none" }}
        />

        {/* REAL EMAIL INPUT */}
        <input
          type="email"
          placeholder="Enter Email"
          autoComplete="off"
          className="border border-gray-700 bg-white text-black p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* REAL PASSWORD INPUT */}
        <input
          type="password"
          placeholder="Enter Password"
          autoComplete="new-password"
          className="border border-gray-700 bg-white text-black p-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Login
        </button>

        <p className="text-gray-400 text-center">
          Don't have an account?
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="text-blue-500"
        >
          Create Account
        </button>

      </div>

    </div>

  );
};

export default Login;