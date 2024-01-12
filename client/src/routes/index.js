import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';

export default function Routees() {
  return (
      <BrowserRouter>
        <Route path='*' element={<Page404 />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </BrowserRouter>
  )
}
