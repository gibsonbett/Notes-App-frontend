import './App.css';
import { Routes, Route } from 'react-router-dom';
// import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      {/* <ToDoList /> */}
      <Routes>
          <Route path='/' element = { <Signup />}/>
        </Routes>
    </div>
  );
}

export default App;
