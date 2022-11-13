import './App.css';
// import { Routes, Route } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from './components/Signup';
// import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <ToDoList />
      {/* <Routes> */}
          {/* <Route path='/' element = { <Login />}/> */}
          {/* <Route path='/users/new' element = {<Signup/>}/>
          <Route path='/home' element= {<ToDoList/>}/> */}
        {/* </Routes> */}
    </div>
  );
}

export default App;
