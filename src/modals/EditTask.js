import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useEffect } from 'react';
import { useState } from 'react';

const EditTask = ({modal,loggedIn, handleNewPost, toggle,taskObj}) => {
    const [form, setForm] = useState(
        {
            category: "",
            todos: ""
        }
    )



    

    const handleUpdate = (e) => {
        fetch(`http://localhost:9293/users/${loggedIn.id}/notes/${taskObj.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(form)
        })
        handleNewPost()
        toggle()
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {form.category} onChange={(e) => setForm({...form, category:e.target.value})}  name = "categories"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {form.todos}onChange={(e) => setForm({...form, todos:e.target.value})} name = "todos"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};




export default EditTask;