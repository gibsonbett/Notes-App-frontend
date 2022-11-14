import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import Signup from './components/Signup';
import Login from './components/Login';



function App() {

  const [loggedIn, setLoggedIn] = useState({})
  const [notes, setNotes] = useState([])
  const [post, setPosts] = useState(true)

  const addNewUser = (newUser) => setLoggedIn(newUser);


  useEffect(() => {
    fetch(`http://localhost:9293/users/${loggedIn.id}/notes`)
    .then(r => r.json())
    .then( (notesarr) => {
      console.log(notesarr)
      setNotes(notesarr)
    })
    }, [loggedIn, post])

    const deleteNote = (id) => {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }

    function handleNewPost() {
      setPosts((post) => !post)
    }



  return (
    <div className="App">
      <Routes>
          <Route path='/home' element= {<ToDoList notes={notes} loggedIn={loggedIn} deleteNote={deleteNote} handleNewPost={handleNewPost}/>}/> 
          <Route path='/users/new' element = {<Signup addNewUser={addNewUser}/>}/>
          <Route path='/' element = { <Login setLoggedIn={setLoggedIn} />}/>
      </Routes>
    </div>
  );
}

export default App;
