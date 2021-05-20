import React from 'react'
import {Modal,Button}  from 'react-bootstrap/'
import SignUp from "./SignUp"

 export default function MySignUpModal(props) {
  return (
    <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-center">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUp />
      </Modal.Body>
      <Modal.Footer>
        <Button style= {{backgroundColor: "#DD35AE",border: "#DD35AE" }} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}