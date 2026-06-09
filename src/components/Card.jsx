// import { useNavigate } from "react-router-dom"
// function Card({ title, description, role }) {
//   const navigate= useNavigate();
//   const handleClick=()=>{
//     navigate("/app",{
//       state:{role}
//     });
//   };

//   return (
//     <div className="bg-gray-800 p-6 rounded-2xl">
    
//       <h3 className="text-2xl font-semibold">
//         {title}
//       </h3>

//       <p className="text-gray-400 mt-3">
//         {description}
//       </p>

//       <button
//       onClick={handleClick}
//       className="mt-5 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl"
//       >Start</button>

//     </div>
//   );
// }

// export default Card

import { useNavigate } from "react-router-dom";

function Card({ title, description, role }) {

  const navigate = useNavigate();

  const handleClick = () => {

    console.log("ROLE:", role);

    navigate("/interview", {
      state: { role },
    });

  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl">

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-400 mt-3">
        {description}
      </p>

      <button
        onClick={handleClick}
        className="mt-5 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl"
      >
        Start
      </button>

    </div>
  );
}

export default Card;