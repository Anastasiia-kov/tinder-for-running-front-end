import React from 'react'
import { Modal, Button } from 'react-bootstrap/'
import LogIn from "./LogIn"

export default function MyLogInModal(props) {
  return (
    <div>
<<<<<<< HEAD
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            Log In
=======
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-center">
                 Log In
>>>>>>> a0352bc280bf6f7203ad77a8d251db26c5c23672
</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LogIn />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}