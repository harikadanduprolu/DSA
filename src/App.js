import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProblemsPage from './components/ProblemsPage';
import ResourceList from './components/ResourceList';
import Header from './components/Header';
import './styles/App.css';
  

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/problems" element={<ProblemsPage />} />
            <Route path="/resources" element={<ResourceList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
