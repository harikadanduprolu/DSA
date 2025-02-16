import React, { useState, useEffect } from 'react';
import { getInitialTasks } from '../data';
import './Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('dsaTasks');
    return stored ? JSON.parse(stored) : getInitialTasks();
  });

  useEffect(() => {
    localStorage.setItem('dsaTasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, solved: !task.solved } : task
      )
    );
  };

  const resetTasks = () => {
    setTasks(getInitialTasks());
  };

  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'solved') return task.solved;
    if (filter === 'unsolved') return !task.solved;
    return true;
  });

  const progress = tasks.length > 0 
    ? (tasks.filter(task => task.solved).length / tasks.length) * 100 
    : 0;

  return (
    <div className="dashboard">
      <h1>30-Day DSA Learning Dashboard</h1>
      
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <p>{Math.round(progress)}% Completed</p>
      </div>

      <div className="filters">
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="solved">Solved</option>
          <option value="unsolved">Unsolved</option>
        </select>
      </div>

      <button className="reset-button" onClick={resetTasks}>Reset Progress</button>

      <div className="daily-tasks">
        <h2>Daily Plan & Tasks</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Topic</th>
              <th>Subtopics</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map(task => (
              <tr key={task.id} className={task.solved ? 'solved' : 'unsolved'}>
                <td>{task.day}</td>
                <td>{task.topic}</td>
                <td>{task.subtopics?.join(', ') || 'No Subtopics'}</td>
                <td>{task.solved ? '✅ Solved' : '❌ Pending'}</td>
                <td>
                  <button className="toggle-button" onClick={() => toggleTask(task.id)}>
                    {task.solved ? 'Mark as Pending' : 'Mark as Solved'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
