import React from 'react'
import '../../assests/styles/section.scss'
import { useDispatch } from 'react-redux'
import { changeType } from '../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'

const Section = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmitSec1 = async () => {
        await dispatch(changeType('Type3'))
        navigate('/start')

    }
    const handleSubmitSec2 = async () => {
        await dispatch(changeType('Type2'))
        navigate('/start')

    }
    const handleSubmitSec3 = async () => {
        await dispatch(changeType('Type1'))
        navigate('/start')

    }


    return (
        <div>
            <div>
                <h3 className='section_h3_div'>Section 1</h3>
                <div className='section_main_div'>
                    <h3 className='width_280'> Choose the correct answer.</h3>
                    <h3 className='font_weight_400 font-wt-12'>10 questions</h3>

                    <button className='solve_btn' onClick={() => handleSubmitSec3()}>Start</button>
                </div>
            </div>

            <div>

                <h3 className='section_h3_div'>Section 2</h3>
                <div className='section_main_div'>
                    <h3 className='width_280'> True or False.</h3>
                    <h3 className='font_weight_400 font-wt-12'>10 questions</h3>

                    <button className='solve_btn' onClick={() => handleSubmitSec2()}>Start</button>
                </div>

            </div>

            <div>
                <h3 className='section_h3_div'>Section 3</h3>

                <div className='section_main_div'>
                    <h3 className='width_280'> Fill in the blanks.</h3>
                    <h3 className='font_weight_400 font-wt-12'>10 questions</h3>
                    <button className='solve_btn' onClick={() => handleSubmitSec1()}>Start</button>
                </div>


            </div>

        </div>

    )
}

export default Section