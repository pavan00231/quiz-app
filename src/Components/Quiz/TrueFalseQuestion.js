// TrueFalseQuestion.js
import React, { useState } from 'react';
import Question from './Question';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation';
import { ansQuestion, endTimer, nextQuestion, previousQuestion, submitQuiz } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';

const TrueFalseQuestion = ({ questions }) => {
  const [colr,setColr] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentQuestionIndex,userAnswers2 ,type} = useSelector(state => state.quiz)

  const handleNextQuestion = () => {
    setColr("")
    dispatch(nextQuestion())
}

const handlePreviousQuestion = () => {
  setColr("")
    dispatch(previousQuestion())
}

const handleAnswer = (ans) => {
  setColr(ans)
    dispatch(ansQuestion(ans))
}

// const handleSubmit = () => {
//   setColr("")
//     dispatch(submitQuiz())
// }
const handleSubmit = () => {
  setColr("")
  if(type == 'Type1'){
      navigate('/sections')
  }else if(type == 'Type2'){

      navigate('/sections')
  }else if(type == 'Type3'){
    dispatch(endTimer())
      dispatch(submitQuiz())
  } 
}
console.log(userAnswers2,currentQuestionIndex,"userAnswers");

  return (



    <div className='quiz_div2 choose_one'>
      {/* <AnsOptions
                    result={false}
                    key={index}
                    option={opt}
                    onSelect={(e) => handleAnswer(e)}
                    bgClr={opt?.id === userAnswers[currentQuestionIndex]}
                  /> */}


      {
        questions?.length > 0 &&
        (
          <>
            <Question
              currentQuestionIndex={currentQuestionIndex}
              questions={questions}
            />
            <div className='btn_div'>
              <button 
                        className={  userAnswers2[currentQuestionIndex] == true ?'opt_btn selected_clr' :'opt_btn unselected_clr' } onClick={() => handleAnswer(true)}>True</button>
              <button 
                        className={  userAnswers2[currentQuestionIndex] == false ?'opt_btn selected_clr' :'opt_btn unselected_clr'  } onClick={() => handleAnswer(false)}>False</button>


            </div>


            <Navigation
              handlePreviousQuestion={handlePreviousQuestion}
              currentQuestionIndex={currentQuestionIndex}
              handleNextQuestion={handleNextQuestion}
              quesLength={questions.length}
              handleSubmit={handleSubmit}

            />
            {/* <button onClick={handleSubmit}>submit</button>
                        <Result /> */}

          </>
        )
      }
    </div>
  );
};

export default TrueFalseQuestion;
