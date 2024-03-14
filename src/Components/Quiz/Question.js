import React from 'react'
import '../../assests/styles/quiz.scss'

const Question = ({currentQuestionIndex,questions}) => {
    // console.log(questions,"questions");
    return (
        <h2 className='txt_align'>
            {currentQuestionIndex + 1}. {questions[currentQuestionIndex].text}
        </h2>
    )
}

export default Question