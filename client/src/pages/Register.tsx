/*
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../components/NavBar/navBar";

// functions
import { RegisterUser } from '../App';

export default function Register() {
  return (
    <>
      <NavBar />
      <Form className='col-md-3 mx-auto my-5'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Month</Form.Label>
            <Form.Control type="number"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Day</Form.Label>
            <Form.Control type="number"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Year</Form.Label>
            <Form.Control  type="number"/>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" onClick={RegisterUser}>
          Register
        </Button>
      </Form>
    </>
  )
}*/
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../components/NavBar/navBar";

// functions
//import { RegisterUser } from '../App';

interface RegisterProps {
  FormData: {
    formName: string;
    formLastName: string;
    formEmail: string;
    formPassword: string;
    formMonth: number;
    formDay: number;
    formYear: number;
  }
  onChange: (Form: keyof RegisterProps['FormData'], value: string | null) => void;
  onSubmit: () => void;
}


const Register: React.FC<RegisterProps> = ({ FormData, onChange, onSubmit }) => {
  return (
    <>
      <NavBar />
      <Form className='col-md-3 mx-auto my-5'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={FormData.formName}
              onChange={e => onChange('formName', e.target.value)}
              placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={FormData.formLastName}
              onChange={e => onChange('formLastName', e.target.value)}
              placeholder="Last Name" />
          </Form.Group>
        </Row>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={FormData.formEmail}
            onChange={(e) => onChange('formEmail', e.target.value)}
            placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={FormData.formPassword}
            onChange={(e) => onChange('formPassword', e.target.value)}
            placeholder="Password" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formMonth">
            <Form.Label>Month</Form.Label>
            <Form.Control
              type="number"
              value={FormData.formMonth}
              onChange={(e) => onChange('formMonth', e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formDay">
            <Form.Label>Day</Form.Label>
            <Form.Control
              type="number"
              value={FormData.formDay}
              onChange={(e) => onChange('formDay', e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formYear">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              value={FormData.formYear}
              onChange={(e) => onChange('formYear', e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" onClick={onSubmit/*RegisterUser*/}>
          Register
        </Button>
      </Form>
    </>
  )
}

export default Register;