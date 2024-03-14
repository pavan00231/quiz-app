import React from 'react'
import '../../assests/styles/quiz.scss'
import { changeCurQuesIndex, nextQuestion } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = ({len}) => {
    const dispatch = useDispatch()
    let newArr = Array(len).fill(1)
    const {currentQuestionIndex} = useSelector(state => state.quiz)

    const handleChangeCurrentQuestionIndex = (val) => {
        dispatch(changeCurQuesIndex(val))
    }

    return (
        <div className='sidebar'>
            {newArr.map((i, index) => (
                index == currentQuestionIndex ?

                    <h2 className='sidebar_selected' key={index}>{index + 1}</h2>
                    :

                    <h2 className='sidebar_h2' key={index} onClick={()=>handleChangeCurrentQuestionIndex(index)}>{index + 1}</h2>
            ))}

        </div>
    )
}

export default Sidebar