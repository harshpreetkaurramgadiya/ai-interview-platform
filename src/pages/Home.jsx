import Hero from "../components/Hero"
// import Navbar from "../components/Navbar"
import Roles from "../components/Roles"
import Features from "../components/Features"
import Footer from "../components/Footer"
import About from "../components/About"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home(){
  const navigate= useNavigate();
  useEffect(()=>{
    const token= localStorage.getItem("token");
    if(!token){
      navigate("/");
    }
  },[]);
    return (
      <div>
       {/* <Navbar/> */}
       <Hero/>
       <Roles/>
       <About/>
       <Features/>
      <Footer/>
      </div>
  )
}

export default Home
  