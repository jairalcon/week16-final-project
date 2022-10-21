import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import LeaderBoard from "./components/LeaderBoard";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";
import axios from "axios";

export default function App() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    console.log('inside useEffect');
    axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users`)
      .then((response) => {
        setAPIData(response.data)
        console.log('Here is APIData', response.data)
      })
  }, [])

  return (
    <>      
      <div className="wrapper container">
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/leaderboard' 
              element={<LeaderBoard
                APIData={APIData}
                setAPIData={setAPIData} />} />      
            {/* <Route path='/update-quiz' element={<UpdateQuiz />} />  */}
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