import React from 'react'
import '../../assests/styles/instructions.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startTimer } from '../../redux/actions/actions'

const Instructions = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit= () =>  {
        dispatch(startTimer())
        navigate('/sections')
        
    }
    return (
        <div className='inst_main_div_1'>
            <div className='main_inst_div' >
                <div>
                    <h3>Hello,</h3>
                    <h1>Welcome to Quiz test</h1>
                </div>
                <div className='test_dur'>
                    <div>
                        <h3 className='font_weight_400'>Test Duration</h3>
                        <h3 className='font_weight_400'>30 minutes</h3>
                    </div>
                    <div>
                        <h3 className='font_weight_400'>No of Questions</h3>
                        <h3 className='font_weight_400'>30</h3>
                    </div>
                </div>
            </div>
            <div className='inst_width_padding' >
                <div>
                    <h2>Instructions</h2>
                </div>
                <div>
                    <p className='p_inst_inc_height'>
                        This is a timed test Please make sure you are not interrupted during the test,as the timer cannot be paused once started.
                    </p>
                    <p>
                        Please ensure you have a stable internet connection.
                    </p>
                    <p>
                        Click on the "Start Quiz" button to begin the quiz.
                    </p>
                    <p className='p_inst_inc_height'>
                        The quiz consists of three sections. Follow the specific instructions for each section carefully.

                    </p>

                    <ul className='ul_inst'>
                        <li className='remove_border'>
                            Section 1: Fill in the blanks.</li>
                        <li className='remove_border'>Section 2: True or False.</li>
                        <li className='remove_border'>Section 3: Choose the correct answer.</li>
                    </ul>



                    <p>

                        Click "Submit" when you've completed all questions.</p>
                    <p>

                        Review your answers before submitting.</p>
                    <p>

                        View your score and detailed results after submitting the quiz.</p>
                </div>
                <div className='inst_btn_div'>
                    <button className='start_btn_main' onClick={()=>handleSubmit()}>Start Test</button>
                </div>
            </div>
        </div>
    )
}

export default Instructions