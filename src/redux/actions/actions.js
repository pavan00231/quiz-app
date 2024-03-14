

export const SET_QUIZ_DATA = 'SET_QUIZ_DATA';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const SUBMIT_QUIZ = 'SUBMIT_QUIZ';
export const PREVIOUS_QUESTION = 'PREVIOUS_QUESTION';
export const GET_TOTAL_SCORE = 'GET_TOTAL_SCORE';
export const CHANGE_INDEX = 'CHANGE_INDEX';
export const RETAKE_QUIZ = 'RETAKE_QUIZ';
export const CHANGE_TYPE = 'CHANGE_TYPE';
export const START_TIMER = 'START_TIMER';
export const END_TIMER = 'END_TIMER';
export const CHANGE_TIME = 'CHANGE_TIME';






export const changeTime = (val) => ({
  type: CHANGE_TIME,
  payload:val
});

export const startTimer = (val) => ({
  type: START_TIMER,
});


export const endTimer = (val) => ({
  type: END_TIMER,
});


export const changeType = (val) => ({
  type: CHANGE_TYPE,
  payload: val,
});

export const setQuizData = (questions) => ({
    type: SET_QUIZ_DATA,
    payload: questions,
  });
  

  export const nextQuestion = () => ({
    type: NEXT_QUESTION
  });

  export const previousQuestion = () => ({
    type: PREVIOUS_QUESTION
  });


  export const ansQuestion = (ans) => ({
    type: ANSWER_QUESTION,
    payload:ans
  });



  export const changeCurQuesIndex = (ans) => ({
    type: CHANGE_INDEX,
    payload:ans
  });
  



  export const submitQuiz = () => ({
    type: SUBMIT_QUIZ
  });

  export const retakeQuiz = () => ({
    type: RETAKE_QUIZ
  });

  