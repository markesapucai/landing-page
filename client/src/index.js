import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhoIAm from './pages/whoiam';
import Home from './pages/home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "whoiam",
    element: <WhoIAm />,
  }
])
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "whoiam",
        element: <WhoIAm />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

