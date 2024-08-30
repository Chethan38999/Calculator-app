import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/calculator/calculator';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
