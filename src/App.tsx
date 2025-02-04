import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './components/QuestionPage';
import FlowerPage from './components/FlowerPage';
import PuzzlePage from './components/PuzzlePage'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionPage />} />
        <Route path="/flowers" element={<FlowerPage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
      </Routes>
    </Router>
  );
};

export default App;