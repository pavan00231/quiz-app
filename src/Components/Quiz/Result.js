import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Question from './Question'
import AnsOptions from './AnsOptions'
import '../../assests/styles/quiz.scss'
import { retakeQuiz } from '../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'

const Result = () => {
  const score = useSelector(state => state.quiz.score)
  const sec3Que = useSelector(state => state.quiz.sec3Que)
  const sec2Que = useSelector(state => state.quiz.sec2Que)
  const sec1Que = useSelector(state => state.quiz.sec1Que)
  const userAnswers1 = useSelector((state) => state.quiz.userAnswers1)
  const userAnswers2 = useSelector((state) => state.quiz.userAnswers2)
  const userAnswers3 = useSelector((state) => state.quiz.userAnswers3)
  const dispatch = useDispatch()

  const handleRetakeQuiz = () => {
    dispatch(retakeQuiz());
    navigate('/instructions');
  }
  const navigate = useNavigate()

  console.log(sec2Que, userAnswers2, "sec2Que");
  return (

    <div className='quiz_result_div txt_aln_center'>
      <div className='flex_div_result cong_main_div'>

        <div>
          <button className='retake_btn' onClick={() => navigate('/instructions')}>Back</button>
        </div>
        <div>

          <h2 className='font-size-btn-cong'>Congratulations</h2>
          <p className='font-size-btn-save'>You solved this challenge!.The result is {score}.</p>

        </div>
        <div>
          <button className='retake_btn' onClick={() => handleRetakeQuiz()}>Retake Quiz</button>
        </div>

      </div>

      <h2>Section1</h2>

      <div className='overflow_scroll'>
        {sec1Que.map((i, ind) => (
          <>
            <Question
              currentQuestionIndex={ind}
              questions={sec1Que}
            />
            <div className='btn_div'>
              {
                i?.options?.map((opt, index) => (
                  <AnsOptions
                    result={true}
                    key={index}
                    option={opt}
                    onSelect={false}
                    bgClr={
                      opt?.id === userAnswers1[ind] && opt?.id === i.correctAnswer ?
                        'green' :
                        opt?.id === userAnswers1[ind] ?
                          'red'
                          :
                          opt?.id === i.correctAnswer ?
                            'correct_green'
                            :
                            'black'

                    }
                  />
                ))

              }



            </div>



          </>
        ))}

      </div>


      <h2>Section2</h2>

      <div className='overflow_scroll'>
        {sec2Que.map((i, ind) => (
          <>
            <Question
              currentQuestionIndex={ind}
              questions={sec2Que}
            />
            <div className='btn_div'>

              <div className='btn_div'>
                <button
                  // opt?.id === userAnswers1[ind] && opt?.id === i.correctAnswer 
                  className={
                    i.correctAnswer == true && userAnswers2[ind] == i.correctAnswer ?
                      'opt_btn selected_clr'
                      :
                      i.correctAnswer == true  ? 'opt_btn undfined_selected_clr'
                        :
                        'opt_btn unselected_red_clr'

                  }
                  onClick={()=>console.log(i.correctAnswer == userAnswers2[ind] ,userAnswers2[ind] , i.correctAnswer )}
                  >True </button>
                <button
                  className={
                    i.correctAnswer == false && userAnswers2[ind] == i.correctAnswer ?
                      'opt_btn selected_clr'
                      :
                      i.correctAnswer == false ? 'opt_btn undfined_selected_clr'

                        : 'opt_btn unselected_red_clr'} 
                        
                onClick={()=>console.log(i.correctAnswer ,userAnswers2[ind])}
                        
                        >False </button>


              </div>





            </div>



          </>
        ))}

      </div>


      <h2>Section3</h2>

      <div className='overflow_scroll'>
        {sec3Que.map((i, ind) => (
          <>
            <Question
              currentQuestionIndex={ind}
              questions={sec3Que}
            />
            <div className='btn_div'>
              {
                i?.options?.map((opt, index) => (
                  <AnsOptions
                    result={true}
                    key={index}
                    option={opt}
                    onSelect={false}
                    bgClr={
                      opt?.id === userAnswers3[ind] && opt?.id === i.correctAnswer ?
                        'green' :
                        opt?.id === userAnswers3[ind] ?
                          'red'
                          :
                          opt?.id === i.correctAnswer ?
                            'correct_green'
                            :
                            'black'

                    }
                  />
                ))

              }



            </div>



          </>
        ))}

      </div>
    </div>
  )
}

export default Result