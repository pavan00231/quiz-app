import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ansQuestion, endTimer, nextQuestion, previousQuestion, submitQuiz } from '../../redux/actions/actions'
import AnsOptions from './AnsOptions'
import Question from './Question'
import Navigation from './Navigation'
import Result from './Result'
import '../../assests/styles/quiz.scss'
import { useNavigate } from 'react-router-dom'

const Quiz = ({ questions,userAnswers }) => {

  const [isVisible, setIsVisible] = useState(true);
    const dispatch = useDispatch()
    const memoizedQuizData = (state) => ({
        type: state.quiz.type,
        currentQuestionIndex: state.quiz.currentQuestionIndex,
        // userAnswers: state.quiz.userAnswers,
    })

    // const memoQuiz = useMemo(() => (state) => ({
    //     questions: state.quiz.questions,
    // }), [])
console.log(questions,"questions in quiz");

    const { currentQuestionIndex ,type} = useSelector(memoizedQuizData);

    const navigate = useNavigate()
    // const { questions } = useSelector(memoQuiz)

    

    const handlePreviousQuestion = () => {
        dispatch(previousQuestion())
    }

    const handleAnswer = (ans) => {
        dispatch(ansQuestion(ans))
    }

    const handleSubmit = () => {
        if(type == 'Type1'){
            navigate('/sections')
        }else if(type == 'Type2'){

            navigate('/sections')
        }else if(type == 'Type3'){

            dispatch(endTimer())
            dispatch(submitQuiz())
        } 
    }

    const handleNextQuestion = () => {
        // setIsVisible(false); // Trigger fade-out transition
        // setTimeout(() => {
            dispatch(nextQuestion()); // Move to next question
        // }, 500); // Wait for the fade-out transition to complete
      };

      
//   useEffect(() => {
//     // Trigger fade-in transition when component mounts
//     setIsVisible(true);
//   }, []);

    return (
        <div className={isVisible ? 'fade-in quiz_div2 choose_one' : 'fade-out quiz_div2 choose_one'}>
            {
                questions?.length > 0 &&
                (
                    <>
                        <Question
                            currentQuestionIndex={currentQuestionIndex}
                            questions={questions}
                        />
                        <div className='btn_div'>
                            {
                                questions[currentQuestionIndex]?.options?.map((opt, index) => (

                                    <AnsOptions
                                        result={false}
                                        key={index}
                                        option={opt}
                                        onSelect={(e) => handleAnswer(e)}
                                        bgClr={opt?.id === userAnswers[currentQuestionIndex]}
                                    />

                                ))
                            }
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
    )
}

export default Quiz