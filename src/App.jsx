// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Home from './pages/Home'
// import Interview from './pages/Interview'
// import Result from './pages/Result'
// import Login from "./pages/Login";
// import AppLayout from './layouts/AppLayout';

// function App(){
//   return (
//    <BrowserRouter>
//    <Routes>
//      <Route path="/login" element={<Login/>} />
//      <Route element={<AppLayout/>}>
//     <Route path="/home" element={<Home/>}/>
//     <Route path="/interview" element={<Interview/>} />
//     <Route path="/result" element={<Result/>} />
//     </Route>
//    </Routes>
//    </BrowserRouter>
//   )
// }
// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Interview from "./pages/Interview";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN PAGE */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>

        {/* MAIN APP */}
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/result" element={<Result />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;