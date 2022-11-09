import React from 'react';
import createTask from '../modals/createTask';
import { useState } from 'react';

const ToDoList =() => {
    const [modal, setModal] = useState(false);
    const toggle =()=> {
        setModal(!modal);
    }

  return (
    <>
     <div className='header text-center'>
        <h3>Notes App</h3>
        <button className="btn btn-primary mt-2">Create Task</button>

    </div>
    <div className='task-container'>

    </div>
    <createTask toggle ={toggle} modal={modal}/>
     
    </>
     );
};


export default ToDoList;
