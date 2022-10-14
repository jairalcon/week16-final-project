import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
import LeaderBoard from "./components/LeaderBoard";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import MusicPlayer from "./components/MusicPlayer";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
// import axios from "axios";

export default function App() {
  return (
    <>      
      <div className="wrapper container">
        <NavBar />
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/quiz' element={<Quiz />} />
            {/* <Route path='/dashboard' element={<Dashboard />}/> */}
            <Route path='/leaderboard' element={<LeaderBoard />} />          
          </Routes>
        <br/>
      </div>
      <div className="fixed-bottom container mb-5">
        <MusicPlayer />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}