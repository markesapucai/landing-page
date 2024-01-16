//import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routees from './routes';

import axios, { AxiosInstance } from 'axios';

const server: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000'
})

export function RegisterUser(formData: {
  formGridName: string;
  formGridLastName: string;
  formGridEmail: string;
  formGridPassword: string;
  formGridMonth: number;
  formGridDay: number;
  formGridYear: number;
}) {
  server.post('/test', {
    name: formData.formGridName,
    lastName: formData.formGridLastName,
    email: formData.formGridEmail,
    password: formData.formGridPassword,
    month: formData.formGridMonth,
    day: formData.formGridDay,
    year: formData.formGridYear,
  })
    .then(response => console.log(response.data))
    .catch(error => console.error(error + 'oi'));
}

function App() {
  return (
    <BrowserRouter>
      <Routees />
    </BrowserRouter>
  )
}

export default App
