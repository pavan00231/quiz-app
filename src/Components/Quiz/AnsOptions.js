import React from 'react';
import '../../assests/styles/quiz.scss';

const AnsOptions = ({ result, option, onSelect, bgClr }) => {
    return (
        <>
            {
                result ?
                    <button
                        className={
                            bgClr == 'green' ?
                                'opt_btn selected_clr'
                                :
                                bgClr == 'red' ?
                                    'opt_btn selected_clr_red'
                                    :

                                    bgClr == 'correct_green' ?
                                        'opt_btn selected_correct_green'
                                        :

                                        'opt_btn unselected_clr'
                        }

                    >
                        {option.text}

                    </button >
                    :
                    <button
                        className={bgClr ? 'opt_btn selected_clr' : 'opt_btn unselected_clr'}
                        onClick={() => onSelect(option.id)}
                    >
                        {option.text}{bgClr}
                    </button>

            }

        </>

    );
};

export default AnsOptions;