import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhoIAm from './pages/whoiam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/whoiam' element={<WhoIAm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

/*
ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' Component={App}/>
      <Route path='/whoiam' Component={WhoIAm}/>
    </Routes>
  </Router>,
  document.getElementById('root')
)*/
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/