import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";
import ScoreList from "./components/ScoreList";
import { usersAPI } from "./rest/Endpoint";
import QuizRetake from "./components/QuizRetake";

export default function App() {
  const [APIData, setAPIData] = useState([]);
  const [score, setScore] = useState(0);
  const [username, setUserName] = useState('');

  let navigate = useNavigate();

  const getScores = async () => {
    const scoresFromServer = await usersAPI.get();
    setAPIData(scoresFromServer);
  }

  //todo https://dev.to/will_yama/how-to-render-responses-96c
  
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
      <NavBar />
      <div className="wrapper container">        
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
            setAPIData={setAPIData}
            />}
          />
          <Route path='/quiz-retake' element={<QuizRetake
            APIData={APIData}
            getScores={getScores}
            setAPIData={setAPIData}
            onSubmit={onSubmit} 
            handleChange={handleChange}
            username={username}
            setUserName={setUserName}
            score={score}
            setScore={setScore}
            />}
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