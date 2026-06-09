import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Roles() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    localStorage.setItem("role", role);
    navigate("/interview");
  };

  return (
    <section id="roles" className="bg-gray-950 text-white py-20 px-10">

      <h2 className="text-4xl font-bold text-center">
        Choose Your Interview Role
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        <Card
          title="Frontend Developer"
          description="React, Tailwind, JavaScript Interview"
          onClick={() => handleRoleSelect("Frontend Developer")}
          role="Frontend Developer"
        />

        <Card
          title="Backend Developer"
          description="Node.js, Express, MongoDB Interview"
          onClick={() => handleRoleSelect("Backend Developer")}
          role="Backend Developer"
        />

        <Card
          title="Full Stack Developer"
          description="Frontend + Backend Interview"
          onClick={() => handleRoleSelect("Full Stack Developer")}
          role="Full Stack Developer"
        />

        <Card
          title="AI Engineer"
          description="AI, ML and System Design Interview"
          onClick={() => handleRoleSelect("AI Engineer")}
          role="AI Engineer"
        />

      </div>

    </section>
  );
}

export default Roles;