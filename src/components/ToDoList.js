import React from 'react';
import CreateTask from '../modals/CreateTask';
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
        <button className="btn btn-primary mt-2" onClick={()=> setModal(true)}>Create Task</button>

    </div>
    <div className='task-container'>

    </div>
    <CreateTask toggle ={toggle} modal={modal}/>
     
    </>
     );
};


export default ToDoList;
