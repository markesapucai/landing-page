/*
import NavBar from "../components/NavBar/navBar";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/NavBar/navBar.css'
import { LoginUser } from "../App";

export default function Login() {
  return (
    <>
      <NavBar />
      <Stack gap={2} className="col-md-3 mx-auto my-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={LoginUser}>
            Submit
          </Button>
        </Form>
      </Stack>
    </>
  )
} //preciso enviar os dados para la
*/

import NavBar from "../components/NavBar/navBar";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/NavBar/navBar.css'
//import { LoginUser } from "../App";

interface LoginProps {
  FormData: {
    formEmail: string;
    formPassword: string;
  }
  onChange: (Form: keyof LoginProps['FormData'], value: string | null) => void;
  onSubmit: () => void;
}

const Login: React.FC<LoginProps> = ({ FormData, onChange, onSubmit }) => {
  return (
    <>
      <NavBar />
      <Stack gap={2} className="col-md-3 mx-auto my-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={FormData.formEmail}
              onChange={(e) => onChange('formEmail', e.target.value)}
              placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={FormData.formPassword}
              onChange={(e) => onChange('formPassword', e.target.value)}
              placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </Stack>
    </>
  )
}

export default Login;