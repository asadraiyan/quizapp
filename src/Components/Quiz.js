import React, { useState } from 'react'
import { Quizdata } from './Quizdata'
import Result from './Result';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < Quizdata.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setClickedOption(0)
        }
        else {
            setShowResult(true)

        }
    }
    const updateScore = () => {
        if (clickedOption === Quizdata[currentQuestion].answer) {
            setScore(score + 1)
        }
    }
    const resetAll = () => {
        setShowResult(false)
        setClickedOption(0)
        setScore(0)
        setCurrentQuestion(0)
    }
    const prevQuestion = () => {
        setCurrentQuestion(currentQuestion - 1)
    }
    return (

        <div className="maincontainer">
            <h1 className='heading'>Welcome to Quiz App!</h1>
            <div className='container'>
                {showResult ? (
                    <Result score={score} totalScore={Quizdata.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question-text">
                            <div className="txtcontainer">
                                <span className='question-no'>{currentQuestion + 1}. </span>
                                <span className='question-txt'> {Quizdata[currentQuestion].question}</span>
                            </div>
                        </div>
                        <div className="option">
                            {Quizdata[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        className={`btn ${clickedOption === i + 1 ? "checked" : null}`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}>{option}</button>
                                )
                            })}
                        </div>
                        <div className="buttons">
                            {currentQuestion === 0 ? <></> : <input type="button" className='previous' value="<-- Previous" onClick={prevQuestion} />}
                            {currentQuestion === 9 ? <input type="button" className='submit' value="Submit" onClick={changeQuestion} /> : <input type="button" className='next' value="Next -->" onClick={changeQuestion} />}
                        </div>
                        <div className="option-btn">
                            <input type="button" className={`btn-1 ${currentQuestion === 0 ? "checked1" : null}`} value="1" onClick={() => setCurrentQuestion(0)} />
                            <input type="button" className={`btn-1 ${currentQuestion === 1 ? "checked1" : null}`} value="2" onClick={() => setCurrentQuestion(1)} />
                            <input type="button" className={`btn-1 ${currentQuestion === 2 ? "checked1" : null}`} value="3" onClick={() => setCurrentQuestion(2)} />
                            <input type="button" className={`btn-1 ${currentQuestion === 3 ? "checked1" : null}`} value="4" onClick={() => setCurrentQuestion(3)} />
                            <input type="button" className={`btn-1 ${currentQuestion === 4 ? "checked1" : null}`} value="5" onClick={() => setCurrentQuestion(4)} />
                            <input type="button" className={`btn-1 ${currentQuestion === 5 ? "checked1" : null}`} value="6" onClick={() => setCurrentQuestion(5)} />
                            <input type="button" className={`btn-1 ${currentQuestion === 6 ? "checked1" : null}`} value="7" onClick={() => setCurrentQuestion(6)} />
                            <input type="button" className={`btn-1 ${currentQuestion === 7 ? "checked1" : null}`} value="8" onClick={() => setCurrentQuestion(7)} />
                            <input type="button" className={`btn-1 ${currentQuestion === 8 ? "checked1" : null}`} value="9" onClick={() => setCurrentQuestion(8)} />
                            <input type="button" className={`btn-1 ${currentQuestion === 9 ? "checked1" : null}`} value="10" onClick={() => setCurrentQuestion(9)} />
                            
                        </div>
                    </>)
                }
            </div>
        </div>

    )
}

export default Quiz
