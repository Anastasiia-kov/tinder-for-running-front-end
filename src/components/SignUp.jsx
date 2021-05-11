import React, { useRef, useState } from "react"
import {Col,Row,Form, Button, Card, Alert } from "react-bootstrap"

export default function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const phoneRef = useRef()
  const distanceRef=useRef()
  const firstnameRef = useRef()
  const [stylerun, setStylerun] = useState("")
  const lastnameRef = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [value, setValue] = useState('')
  
 const handleChange = (val) => {
   console.log(val.target.value)
    setStylerun(val.target.value)   
    };


  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError('')
      setLoading(true)

    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }
  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} />
            </Form.Group>
            <Form.Group id="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control format="+972 ###-####" mask="_" ref={phoneRef} required />
            </Form.Group>
            <Form.Group id="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" ref={firstnameRef} required />
            </Form.Group>
            <Form.Group id="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" ref={lastnameRef} required />
            </Form.Group>
            <Form.Group id="runningpref">
              <Form.Label>Running preferences:</Form.Label>
            </Form.Group>
            <fieldset>
    <Form.Group  as={Row}  >
      <Form.Label as="legend" column sm={5}> Style of running </Form.Label>
      <Col sm={10}>
        
        <Form.Check
          onChange={handleChange}
          value="Slow"
          type="radio"
          label="Slow"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
        onChange={handleChange}
        value="Normal"
          type="radio"
          label="Normal"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
        onChange={handleChange}
          value="Fast"
          type="radio"
          label="Fast"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formBasicRange">
    
    <Form.Label as="legend" column sm={3}>Distance</Form.Label>
    <Col>
    <Form.Control 
min={1}
            max={44}
value={value}
    onChange={e => setValue(e.target.value)}
    type="range" />
    </Col>
    <Col xs="3">
          <Form.Control value={value}/>
        </Col>
  </Form.Group>
  </fieldset>            
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account?
      </div>
    </>
  )
}

