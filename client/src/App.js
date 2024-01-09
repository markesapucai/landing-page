import * as React from "react";
import Routes from './routes'
import { BrowserRouter } from "react-router-dom";

// pages & components
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
