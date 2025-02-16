import React from 'react';

const Task = ({ task, toggleTask }) => {
  return (
    <li className="task-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      <span>{task.date}: {task.topic}</span>
    </li>
  );
};

export default Task;
