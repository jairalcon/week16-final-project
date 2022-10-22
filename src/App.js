import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
// import LeaderBoard from "./components/Scores";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";
// import axios from "axios";
import ScoreList from "./components/ScoreList";
import { usersAPI } from "./rest/Endpoint";
import QuizRetake from "./components/QuizRetake";

export default function App() {
  const [APIData, setAPIData] = useState([]);
  const [score, setScore] = useState(0);
  const [username, setUserName] = useState('');

  let navigate = useNavigate();
  // const [newScore, setNewScore] = useState({ username: '', score: '' });

  const getScores = async () => {
    const scoresFromServer = await usersAPI.get();
    setAPIData(scoresFromServer);
  }

  useEffect(() => {
    getScores();
  }, [])
  // console.log('first fetching scores:', APIData);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit event", event);

    usersAPI.post([username, score]);
    setUserName("");
    setScore("");
    navigate('/scorelist');
  };
  

  function handleChange(event) {
    console.log(" handleChange name", event.target.name);
    console.log("userName handleChange value", event.target.value);
    setUserName(`${event.target.name}${event.target.value}`);
  }



  return (
    <>
      <div className="wrapper container">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz
            score={score}
            setScore={setScore}
            APIData={APIData}
            setAPIData={setAPIData}
            onSubmit={onSubmit}
            username={username}
            setUserName={setUserName}
            handleChange={handleChange}
          />}
          />
          <Route path='/scorelist' element={<ScoreList
            APIData={APIData}
            setAPIData={setAPIData} />}
          />
          <Route path='/quiz-retake' element={<QuizRetake
            APIData={APIData}
            setAPIData={setAPIData}
            onSubmit={onSubmit} />}
            handleChange={handleChange}
            username={username}
            setUserName={setUserName}
            score={score}
            setScore={setScore}
          /> 
        </Routes>
        <br />
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