import React, { useEffect, useState } from 'react'
import '../../assests/styles/quiz.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeTime, endTimer, submitQuiz } from '../../redux/actions/actions'

const Timer = () => {
    const dispatch = useDispatch()
    const {time} = useSelector(state => state.quiz)
    const [timer, setTimer] = useState(300)
    useEffect(() => {

        if (time > 0) {
            const timerId = setInterval(() => {
                // setTimer(time - 1)
                dispatch(changeTime(time - 1))

            }, 1000)

            return () => clearInterval(timerId);
        } else if (time == 0) {
            dispatch(endTimer())
                dispatch(submitQuiz())
            
        }


    }, [time]);

    const formatTimer = (val) => {
        const minutes = Math.floor(val / 60);
        const remainingSec = val % 60;

        return `${String(minutes).padStart(2,'0')}:${String(remainingSec).padStart(2,'0')}`;
    }


    return (
        <div className='h3_font'>
            {formatTimer(time)} &nbsp; &nbsp; |  


        </div>
    )
}

export default Timer