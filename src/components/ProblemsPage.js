import React, { useState } from 'react';
import ProblemsTable from './ProblemsTable';
import { getProblemsData } from '../data';
//import './ProblemsPage.css';

const ProblemsPage = () => {
  const [problems, setProblems] = useState(getProblemsData());

  const toggleProblemStatus = (id) => {
    setProblems(prevProblems =>
      prevProblems.map(problem =>
        problem.id === id ? { ...problem, solved: !problem.solved } : problem
      )
    );
  };

  return (
    <div className="problems-page">
      <h1>All DSA Problems</h1>
      <ProblemsTable problems={problems} toggleProblemStatus={toggleProblemStatus} />
    </div>
  );
};

export default ProblemsPage;
