import './App.css';
import { Routes, Route } from 'react-router-dom';
// import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';
import NavBar from './components/Nav';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      {/* <ToDoList /> */}
      <Routes>
          <Route path='/' element = { <Signup />}/>
          <Route path='/' element = {<NavBar/>}/>
          <Route path='/' element= {<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
