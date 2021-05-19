import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
<div>
<h1>CheckPoint-Form</h1>
<Form>
   <div className="lyout">
  <Form.Group >
    <Form.Label className="titles">First name</Form.Label>
    <Form.Control className='space' placeholder="Name"/>
  </Form.Group>
  <Form.Group >
    <Form.Label className="titles">Last name</Form.Label>
    <Form.Control className='space' placeholder="Last name"/>
  </Form.Group>
  </div>
  <div className="lyout">
  <Form.Group >
    <Form.Label className="titles">Address</Form.Label>
    <Form.Control className='space' placeholder="Address"/>
  </Form.Group>
  <Form.Group >
    <Form.Label className="titles">University</Form.Label>
    <Form.Control className='space' placeholder="University"/>
  </Form.Group>
  </div>
  <div className="lyout">
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="titles">Email address</Form.Label>
    <Form.Control className='space' type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="titles">Password</Form.Label>
    <Form.Control className='space' type="password" placeholder="Password" />
  </Form.Group>
  </div>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check className='titles' type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button className='button' variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>

  );
}

export default App;


