import React from 'react';
import CreateTask from '../modals/CreateTask';
import { useState } from 'react';

const ToDoList =() => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] =useState([]) 
    const toggle =()=> {
        setModal(!modal);
    }
    const saveTask =(taskObj) =>{
        //templist is temporary list 
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList)
    }


  return (
    <>
     <div className='header text-center'>
        <h3>Notes App</h3>
        <button className="btn btn-primary mt-2" onClick={()=> setModal(true)}>Create Task</button>

    </div>
    <div className='task-container'>
        {taskList.map((obj)=> <li>{obj.Name}</li>)}




    </div>
    <CreateTask toggle ={toggle} modal={modal} save ={saveTask}/>
     
    </>
     );
};


export default ToDoList;
