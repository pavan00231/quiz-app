import { configureStore } from "@reduxjs/toolkit";
import quizReducers from "./reducers/quizReducers";

const rootReducer = {
    quiz: quizReducers,
    // user: userReducer,
    // Add more reducers as needed
  };


const store = configureStore({
    reducer: rootReducer
})

export default store;