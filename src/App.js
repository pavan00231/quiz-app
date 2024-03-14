
import { RouterProvider } from 'react-router-dom';
import LeaderboardIndex from './Components/Leaderboard';
import QuizIndex from './Components/Quiz';
import Header from './Components/Quiz/Header';
import { router } from './Components/Router';

function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
