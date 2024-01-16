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
    formGridName: string;
    formGridLastName: string;
    formGridEmail: string;
    formGridPassword: string;
    formGridMonth: number;
    formGridDay: number;
    formGridYear: number;
  }
  onChange: (FormGrid: keyof RegisterProps['FormData'], value: string | null) => void;
  onSubmit: () => void;
}


const Register: React.FC<RegisterProps> = ({ FormData, onChange, onSubmit }) => {
  return (
    <>
      <NavBar />
      <Form className='col-md-3 mx-auto my-5'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={FormData.formGridName}
              onChange={e => onChange('formGridName', e.target.value)}
              placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={FormData.formGridLastName}
              onChange={e => onChange('formGridLastName', e.target.value)}
              placeholder="Last Name" />
          </Form.Group>
        </Row>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={FormData.formGridEmail}
            onChange={(e) => onChange('formGridEmail', e.target.value)}
            placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={FormData.formGridPassword}
            onChange={(e) => onChange('formGridPassword', e.target.value)}
            placeholder="Password" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridMonth">
            <Form.Label>Month</Form.Label>
            <Form.Control
              type="number"
              value={FormData.formGridMonth}
              onChange={(e) => onChange('formGridMonth', e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDay">
            <Form.Label>Day</Form.Label>
            <Form.Control
              type="number"
              value={FormData.formGridDay}
              onChange={(e) => onChange('formGridDay', e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridYear">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              value={FormData.formGridYear}
              onChange={(e) => onChange('formGridYear', e.target.value)}
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