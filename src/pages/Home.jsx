import Hero from "../components/Hero"
// import Navbar from "../components/Navbar"
import Roles from "../components/Roles"
import Features from "../components/Features"
import Footer from "../components/Footer"
import About from "../components/About"
function Home(){
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
  