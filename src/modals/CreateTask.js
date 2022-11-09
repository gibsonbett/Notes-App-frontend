import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle,}) => {
 
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            
                    <form>
                        <div className='form-group'>
                            <input type="text" className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <textarea rows="5" className='form-control'></textarea>

                        </div>

                    </form>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;