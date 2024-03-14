import React from 'react'
import '../../assests/styles/quiz.scss'

const Navigation = ({ handlePreviousQuestion,handleSubmit, currentQuestionIndex, handleNextQuestion,quesLength}) => {
    return (
        <div className='btn_div_nav'>
            <button
            className='next_previous_button'
                onClick={() => handlePreviousQuestion()}
                disabled={currentQuestionIndex === 0 ? true : false}
            >
                Previous Question
            </button>
            {
                currentQuestionIndex !== quesLength - 1 ?
                    <button onClick={() => handleNextQuestion()} className='next_previous_button'>
                        Next Question
                    </button>
                    :
                    <button className='next_previous_button' onClick={()=>handleSubmit()}>
                        Submit Quiz
                    </button>
            }


        </div>
    )
}

export default Navigation