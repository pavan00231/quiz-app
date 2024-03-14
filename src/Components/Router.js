import { createBrowserRouter } from "react-router-dom";
import QuizIndex from "./Quiz";
import ErrorPage from "./ErrorPage";
import Header from "./Quiz/Header";
import LeaderboardIndex from "./Leaderboard";
import Login from "./Authorization/Login";
import Instructions from "./Instructions/Instructions";
import Section from "./Instructions/Section";
import QuizQuestion from "./Quiz/Quizquestion";



export const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element:
    //         <>
    //             <QuizIndex />
    //         </>,

    //     errorElement: <ErrorPage />,

    // },
    {

        path: "/leaderboard",
        element:
            <>
                {/* <QuizIndex /> */}
                <Header submitted={true} />
                <LeaderboardIndex />
            </>,

        errorElement: <ErrorPage />,


    },
    {

        path: "/login",
        element:
            <>
                {/* <QuizIndex /> */}
                <Header submitted={true} />
                <Login />
            </>,

        errorElement: <ErrorPage />,


    },
    {

        path: "/",
        element:
            <>
                {/* <QuizIndex /> */}
                <Header submitted={true} />
                <Instructions />
            </>,

        errorElement: <ErrorPage />,


    },
    {

        path: "/instructions",
        element:
            <>
                {/* <QuizIndex /> */}
                <Header submitted={true} />
                <Instructions />
            </>,

        errorElement: <ErrorPage />,


    },
    {

        path: "/sections",
        element:
            <>
                {/* <QuizIndex /> */}
                <Header submitted={true} />
                <Section />
            </>,

        errorElement: <ErrorPage />,


    },
    ,
    {

        path: "/start",
        element:
            <>
                {/* <QuizIndex /> */}
                {/* <Header submitted={true} /> */}
                <QuizQuestion />
            </>,

        errorElement: <ErrorPage />,


    },
    
])