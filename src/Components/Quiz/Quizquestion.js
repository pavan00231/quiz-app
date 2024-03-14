// QuizQuestion.js
import React from 'react';
// import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';
// import OpenEndedQuestion from './OpenEndedQuestion';
import { useSelector } from 'react-redux';
import Quiz from './Quiz';
import QuizIndex from './index';
import TrueFalseIndex from './TrueFalseIndex';

const QuizQuestion = () => {
    let { questions, type ,userAnswers2,userAnswers3,userAnswers1} = useSelector(state => state.quiz);
    // console.log(questions, type,"question, type");
    switch (type) {
        case 'Type1':
            return <QuizIndex questions={questions} userAnswers={userAnswers1} />;
        case 'Type2':
            return <TrueFalseIndex questions={questions} userAnswers={userAnswers2} />;
        case 'Type3':
            return <QuizIndex questions={questions} userAnswers={userAnswers3} />;
        default:
            return null;
    }
};

export default QuizQuestion;
