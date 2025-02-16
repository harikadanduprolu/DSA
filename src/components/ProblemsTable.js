import React from 'react';
//import './ProblemsTable.css';

const ProblemsTable = ({ problems, toggleProblemStatus }) => {
  return (
    <table className="problems-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Topic</th>
          <th>Subtopic</th>
          <th>Problem</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {problems.map(problem => (
          <tr key={problem.id}>
            <td>{problem.id}</td>
            <td>{problem.topic}</td>
            <td>{problem.subtopic}</td>
            <td>{problem.title}</td>
            <td>{problem.solved ? 'Solved' : 'Pending'}</td>
            <td>
              <button onClick={() => toggleProblemStatus(problem.id)}>
                {problem.solved ? 'Mark Pending' : 'Mark Solved'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProblemsTable;
