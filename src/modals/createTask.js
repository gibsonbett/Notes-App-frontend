import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const createTask() => {
  return (
    <div>
     <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          
         </ModalBody>
         <ModalFooter>
         <Button color="primary" onClick={toggle}>
            Do Something
         </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
        </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default createTask 