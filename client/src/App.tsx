//import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routees from './routes';

import axios, { AxiosInstance } from 'axios';

const server: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000'
})

interface FormDataInterface {
  formName: string;
  formLastName: string;
  formEmail: string;
  formPassword: string;
  formBirthday: string;
}

export function RegisterUser(formData: FormDataInterface) {
  server.post('/register', {
    name: formData.formName,
    lastName: formData.formLastName,
    email: formData.formEmail,
    password: formData.formPassword,
    birthday: formData.formBirthday
  })
    .then(response => console.log(response.data))
    .catch(error => console.error(error.response || error.message));
}

export function LoginUser(formData: FormDataInterface) {
  server.post('/login', {
    email: formData.formEmail,
    password: formData.formPassword
    });
}

function App() {
  return (
    <BrowserRouter>
      <Routees />
    </BrowserRouter>
  )
}

export default App
