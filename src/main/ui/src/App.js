import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppBar from './components/AppBar';
import Home from './components/Home';
import AddWorksheet from './components/AddWorksheet';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    This one of my hobby project with React and Spring!
    <Router>
      <AppBar/>
        <Routes>
          <Route exact path= "/" element= {<Home/>} />
          <Route exact path= "/add" element= {<AddWorksheet/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
