import * as React from "react";
import { Routes, Route } from "react-router-dom";

// pages & components
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
