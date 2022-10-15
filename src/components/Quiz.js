import React, { useState, useEffect } from 'react'
import { questions } from './Questions';
import SubmitResults from './SubmitResults';
import axios from 'axios';

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [APIData, setAPIData] = useState([]);


    useEffect(() => {
        console.log('inside useEffect');
        axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users`)
            .then((response) => {
                setAPIData(response.data)
                console.log('Here is APIData', response.data)
            })
    }, [])

    const handleClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
        console.log('was answer correct?', isCorrect)
    };

    // create conditional function to determine if user's quiz exists
    // https://stackoverflow.com/questions/45109872/passing-data-using-react-native-navigation

    return (
        <div className="quiz-app justify-content-center">
            {showScore ? (
                <section className="showScore-section font-face-f1b">
                    Your score is {score} out of {questions.length}<br/>
                    {/* passing results to SubmitResults */}
                    <SubmitResults score={score} setScore={setScore} APIData={APIData}/>
                </section>
            ) : (
                <>
                    <section className="question-section font-face-f1b">
                        <h1>
                            Question {currentQuestion + 1}/{questions.length}
                        </h1>
                        <p>{questions[currentQuestion].questionText}</p>
                    </section>

                    <section className="answer-section ">
                        {questions[currentQuestion].answerOptions.map((item, index) => (
                            <button 
                                className='btn btn-answer font-face-f1r' 
                                key={index} 
                                onClick={() => handleClick(item.isCorrect)}>
                                {item.answerText}
                            </button>
                        ))}
                    </section>
                </>
            )}
        </div>
    );
}
