import React from 'react'

function Result(props) {
    return (
        <>
            <div className='show-score'>
                <span>Your Score: {props.score}</span>
                <span>Total Score: {props.totalScore}</span>    
            </div>
            <button className='tryagain' onClick={props.tryAgain}>Try again</button>
            

        </>
    )
}

export default Result
