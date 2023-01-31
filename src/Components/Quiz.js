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
    const resetAll = () =>{
        setShowResult(false)
        setClickedOption(0)
        setScore(0)
        setCurrentQuestion(0)
    }
    return (
        
            <div className="maincontainer">
                <h1 className='heading'>Welcome to Quiz App!</h1>
                <div className='container'>
                    {showResult ? (
                     <Result score = {score} totalScore = {Quizdata.length} tryAgain ={resetAll}/>
                    ):(
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
                                className={`btn ${
                                    clickedOption === i+1?"checked":null
                                }`} 
                                    key={i} 
                                    onClick={() => setClickedOption(i + 1)}>{option}</button>
                            )
                        })}
                    </div>
                    <input type="button" value="Next" className='next' onClick={changeQuestion} />
                    </>)}
                </div>
            </div>
    
    )
}

export default Quiz
