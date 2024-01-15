import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routees from './routes';

import axios, { AxiosInstance } from 'axios';

const server: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000'
})

function App() {

  useEffect(() => {
    server.post('/test', {
      name: 'teste Integração',
      email: 'puffts@maisumaveeeeez.com',
      password: '1234eeee56',
      phone: {
        number: '+555 635 6 498 12',
        verified: true
      }
    })
      .then(response => console.log(response.data))
      .catch(error => console.error(error + 'oi'));
  }, []);

  return (
    <BrowserRouter>
      <Routees />
    </BrowserRouter>
  )
}

export default App

/*
export function RegisterUser() {
  server.post('/register', {
    nome: 'Paulo',
    idade: '25'
  })
  .then(response => console.log(response.data))
  .catch(error => console.error(error))
}
*/

/*
  server.post('/register', {
    name: 'teste Integração',
    email: 'puts@maisumavez.com',
    emailVerified: true,
    password: '123456',
    phone: {
      number: '+555 635 498 12',
      verified: true
    }
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));
  */