import React, { useEffect } from 'react';
import CreateTask from '../modals/CreateTask';
import { useState } from 'react';
import Card from './Card';

const ToDoList =() => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] =useState([]) 

    useEffect(()=>{
        //this will store all our tasks in this variable
        let arr =localStorage.getItem("taskList")
        //this will convert array string to array object
        let obj =JSON.parse(arr)
        if (arr){
            let obj =JSON.parse(arr)
            setTaskList(obj)
        }
    }, []) 
    const deleteTask =(index) =>{
        let tempList = taskList 
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
         setTaskList(tempList)
         // this function reloads the page while simultaneously deleting the card
         window.location.reload()
    }

    const toggle =()=> {
        setModal(!modal);
    }
    const saveTask =(taskObj) =>{
        //templist is temporary list 
        let tempList = taskList
        tempList.push(taskObj)
        //local storage
        localStorage.setItem("taskList", JSON.stringify (tempList))
        setModal(false)
        setTaskList(tempList)
    }


  return (
    <>
     <div className='header text-center'>
        <h3>Notes App</h3>
        <button className="btn btn-primary mt-2" onClick={()=> setModal(true)}>Create Task</button>

    </div>
    <div className='task-container'>
        {taskList.map((obj, index)=> <Card taskObj={obj} index={index} deleteTask={deleteTask}/>)}





    </div>
    <CreateTask toggle ={toggle} modal={modal} save ={saveTask}/>
     
    </>
     );
};


export default ToDoList;
