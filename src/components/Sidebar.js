import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>📌 DSA Tracker</h2>

      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              🏠 Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/problems" className={({ isActive }) => (isActive ? 'active' : '')}>
              📝 Problems
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" className={({ isActive }) => (isActive ? 'active' : '')}>
              📚 Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/progress" className={({ isActive }) => (isActive ? 'active' : '')}>
              📊 Progress
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="plan-overview">
        <h3>📅 30-Day DSA Plan</h3>
        <ul className="plan-list">
          <li><strong>Day 1–5:</strong> Arrays & Strings</li>
          <li><strong>Day 6–10:</strong> Linked Lists & Stacks</li>
          <li><strong>Day 11–15:</strong> Queues & Trees</li>
          <li><strong>Day 16–20:</strong> Graphs & Sorting</li>
          <li><strong>Day 21–25:</strong> Dynamic Programming</li>
          <li><strong>Day 26–30:</strong> Bit Manipulation & Misc.</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
