import './App.css';
import { Route, Routes } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './components/Signup';
import Login from './components/Login.js';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      {/* <ToDoList /> */}
      <NavBar/>
        <Routes>
          <Route path='/signup' element = { <SignUp />}/>
          <Route exact path='/login' element = { <Login />}/>
          <Route exact path='/todolist' element = { <ToDoList />}/> 
        </Routes>
       
    </div>

  );
     
    }
     


export default App;
