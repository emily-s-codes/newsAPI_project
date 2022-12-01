import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import SingleNewsItem from './components/newsSection/singleNewsItem/SingleNewsItem';

//{ title: 1 }, { title: 2 }

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path={"_blank"} element={<SingleNewsItem />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
