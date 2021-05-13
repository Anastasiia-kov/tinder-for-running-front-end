import React from 'react'
import { Button, Container,Row,Col } from "react-bootstrap"
import { useState } from "react";
import MySignUpModal from "../components/ModalSignUp"
import MyLogInModal from "../components/ModalLogIn"

export default function Homepage() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowLogIn, setModalShowLogIn] = useState(false);
    
   
   
  
        return (
            <div>
                <Container>
                <Row>
                <h1>Welcome to Tinder Sport Page</h1>
                <Col>
                <Button variant="primary" size="lg" onClick={() => setModalShowLogIn(true)}>Log In</Button>{' '}
                </Col>
                <Col>
                <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>Sign Up</Button>
                </Col>
                <MySignUpModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <MyLogInModal
                    show={modalShowLogIn}
                    onHide={() => setModalShowLogIn(false)}
                />
                </Row>
                </Container>
            </div>
        )
    

}

