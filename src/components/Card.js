import React, { useState } from 'react'
import EditTask from '../modals/EditTask';
import  '../../src/App.css'

const Card = ({taskObj, loggedIn, handleNewPost, deleteNote}) => {
    const [modal, setModal] = useState(false);
   

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
    // this will update my modal state to the opposite of the previous modal state
    const toggle = () =>{
        setModal(!modal);
    }

    const handleDelete = () => {
        fetch(`http://localhost:9293/users/${loggedIn.id}/notes/${taskObj.id}`, {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then(() => deleteNote(taskObj.id))
    }




  return (
    <div class = "card-wrapper mr-5">
    <div class = "card-top" style={{"background-color": colors[1%5].primaryColor}}></div>
    <div class = "task-holder">
        <span class = "card-header" style={{"background-color": colors[4%5].secondaryColor, "border-radius": "10px"}}>{taskObj.category}</span>
        <p className = "mt-3">{taskObj.todos}</p>

        <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
            <i class = "far fa-edit mr-3" style={{"color" : colors[19%5].primaryColor, "cursor" : "pointer"}} onClick={()=> setModal(true)}></i>
            <i class="fas fa-trash-alt" onClick={handleDelete} style = {{"color" : colors[20%5].primaryColor, "cursor" : "pointer"}} ></i>
        </div>
</div>
<EditTask modal ={modal} loggedIn={loggedIn} handleNewPost={handleNewPost} toggle ={toggle} taskObj ={taskObj}/>
</div>
);
};

export default Card;