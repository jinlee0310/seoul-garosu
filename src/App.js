import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import CaretreeIntroduce from './pages/CaretreeIntroduce';
import DataVisualization from './pages/DataVisualization';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/caretreeintroduce">introduce</Link>
        <Routes>
          <Route path="/caretreeintroduce" element={<CaretreeIntroduce />} />
          <Route path="/datavisualization" element={<DataVisualization />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
