import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppBar from './components/AppBar';
import Home from './components/Home';
import AddWorksheet from './components/AddWorksheet';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EditWorksheet from './components/EditWorksheet';
import ViewWorksheet from './components/ViewWorksheet';


function App() {
  return (
    <div className="App">
    This is one of my hobby project with React and Spring!
    <Router>
      <AppBar/>
        <Routes>
          <Route exact path= "/" element= {<Home/>} />
          <Route exact path= "/add" element= {<AddWorksheet/>} />
          <Route exact path="/edit/:id" element={<EditWorksheet/>}/>
          <Route exact path="/view/:id" element={<ViewWorksheet/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
