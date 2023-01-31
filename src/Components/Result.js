import React from 'react'

function Result(props) {
  return (
    <>
    <div className='show-score'>
      Your Score: {props.score} <br />
      Total Score: {props.totalScore} <br />
      <button className='next' onClick={props.tryAgain}>Try again</button>
    </div>
    
    </>
  )
}

export default Result
