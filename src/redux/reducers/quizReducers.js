
import {
    SET_QUIZ_DATA,
    ANSWER_QUESTION,
    NEXT_QUESTION,
    SUBMIT_QUIZ,
    PREVIOUS_QUESTION,
    CHANGE_INDEX, RETAKE_QUIZ, CHANGE_TYPE, START_TIMER, END_TIMER, CHANGE_TIME
} from '../actions/actions';

import initialState from './InitialState';





const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUIZ_DATA:
            return {
                ...state,
                questions: action.payload,
            };

        case ANSWER_QUESTION:
            let newArr = [];
            if (state.type == 'Type1') {
                newArr = [...state.userAnswers1]
                newArr[state.currentQuestionIndex] = action.payload
                return {
                    ...state,
                    userAnswers1: newArr
                };
            } else if (state.type == 'Type2') {
                newArr = [...state.userAnswers2]
                newArr[state.currentQuestionIndex] = action.payload
                return {
                    ...state,
                    userAnswers2: newArr
                };
            } else if (state.type == 'Type3') {
                newArr = [...state.userAnswers3]
                newArr[state.currentQuestionIndex] = action.payload
                return {
                    ...state,
                    userAnswers3: newArr
                };
            }


        case NEXT_QUESTION:
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            };

        case PREVIOUS_QUESTION:
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex - 1,
            };

        case CHANGE_INDEX:

            return {
                ...state,
                currentQuestionIndex: action.payload,
            };


        case SUBMIT_QUIZ:
            let sec1 = [...state.userAnswers1]
            let sec2 = [...state.userAnswers2]
            let sec3 = [...state.userAnswers3]
            const score1 = calculateScore(state.sec1Que, sec1);
            const score2 = calculateScore(state.sec2Que, sec2);
            const score3 = calculateScore(state.sec3Que, sec3);
            let totalScore = score1 + score2 + score3
            return {
                ...state,
                score: totalScore,
                submitted: true
            };


        case RETAKE_QUIZ:
            const val = Array.from({ length: 10 });
            return {
                ...state,
                score: 0,
                userAnswers1: val,
                userAnswers2: val,
                userAnswers3: val,
                currentQuestionIndex: 0,
                submitted: false
            };

        case CHANGE_TYPE:
            let changeTyp = action.payload;
            let queo;
            if (changeTyp === 'Type1') {
                queo = [...state.sec1Que];
            } else if (changeTyp === 'Type2') {
                queo = [...state.sec2Que];
            } else if (changeTyp === 'Type3') {
                queo = [...state.sec3Que];
            }

            console.log("ssssss", changeTyp, queo);

            return {
                ...state,
                type: action.payload,
                questions: queo,
                currentQuestionIndex: 0
            };
            

            case CHANGE_TIME:
                return {
                    ...state,
                    time:action.payload
                };

        case START_TIMER:
            console.log('SSSSSSSSSSs');
            
            return {
                ...state,
                time:300,
                startTimer:true
            };

        case END_TIMER:
            return {
                ...state,
                time:0,
                startTimer:false
            };

        default:
            return state;
    }
};

// Helper function to calculate the score
const calculateScore = (questions, userAnswers) => {
    let dummyQues = [...questions]
    let score = dummyQues.reduce((acm, ans, ind) => {
        if (ans.correctAnswer == userAnswers[ans.id - 1]) {
            acm = acm + 1
        }
        return acm
    }, 0)

    return score;
};

export default quizReducer;