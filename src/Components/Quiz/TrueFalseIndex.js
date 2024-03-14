import React from 'react'
import Header from './Header'
import Quiz from './Quiz'
import Sidebar from './Sidbar'
import '../../assests/styles/quiz.scss'
import { useSelector } from 'react-redux'
import Result from './Result'
import TrueFalseQuestion from './TrueFalseQuestion'

const TrueFalseIndex = ({questions,userAnswers}) => {

  const { submitted } = useSelector(state => state.quiz)


  return (
    <div>
      <Header submitted={submitted} />
      {
        submitted === true ?

          <Result />
          :

          <div className='sidebar_div1'>
            <Sidebar len={questions.length}  />
            <TrueFalseQuestion questions={questions}  />

          </div>
      }

    </div>
  )
}

export default TrueFalseIndex