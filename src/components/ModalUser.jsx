import React from 'react'
import { Row, Col, ListGroup, Card, Modal, Button } from 'react-bootstrap/'

export default function ModalUser(props) {
  const { user, todos } = props
  

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center"> User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="text-center">
            <Card.Header> 
            First Name: {user.firstname},
            Last Name: {user.lastname} ,
            Phone Number:{user.phonenumber}
            Mail :{user.mail}
          
            </Card.Header>
            <Card.Body>
              <Card.Title>Pet List</Card.Title>
              {todos ==="" && <Card.Text>No pets</Card.Text>}
    
              {todos && <ListGroup>
                {todos.map((todos, index) => (
                  <ListGroup.Item action index={index} todos={todos} key={todos.id} props>
                    <Row>
                      <Col>{todos.name}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>}
            </Card.Body>
          </Card>     
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}