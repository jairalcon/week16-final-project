import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersAPI } from '../rest/Endpoint';
import { questions } from './Questions';

export default function QuizRetake({ APIData, setAPIData}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0)
    // const [editScore, setEditScore] = useState(0)
    const user = usersAPI.put();
    console.log('user on QuizRetake:', user);

    let navigate = useNavigate();

    // useEffect(() => {
    //     if (user) {
    //         setScore(user.score);
    //     }
    // }, [user, setScore])

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

    const submitRetakeScore = async (e) => {
        console.log('inside retake submit')
        e.preventDefault();
        // await usersAPI.apiEdit(score);

        navigate('/scorelist');
    };

    // const handleEdit = async (id) => {
    //     const updatedScore = { id, score: score };
    //     try {
    //         const response = await usersAPI.put(updatedScore);
    //         setAPIData(user.map(users => users.id === id ? { ...response.data } : users));
    //         navigate('/scorelist');
    //     } catch (err) {
    //         console.log(`Error: ${err.message}`)
    //     }
    // } 


    // create conditional function to determine if user's quiz exists
    // https://stackoverflow.com/questions/45109872/passing-data-using-react-native-navigation

    return (
        <div className="quiz-app justify-content-center">
            {showScore ? (
                <section className="showScore-section font-face-f1b">
                    Your score is {score} out of {questions.length}<br />
                    <form onSubmit={submitRetakeScore}>
                        <button
                            className='btn btn-success font-face-f1r'
                            type='submit'
                            value={score}>
                            Submit Retaken Results
                        </button>
                    </form>
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