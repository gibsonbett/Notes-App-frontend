import React from 'react';
import createTask from '../modals/createTask';

const ToDoList =() => {
  return (
    <>
     <div className='header text-center'>
        <h3>Notes App</h3>
        <button className="btn btn-primary mt-2">Create Task</button>

    </div>
    <div className='task-container'>

    </div>
    <createTask toggle ={}
     
    </>
     );
};


export default ToDoList;
