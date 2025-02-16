import React from 'react';
import { resources } from '../data';
//import './ResourceList.css';

const ResourceList = () => {
  return (
    <div className="resource-list">
      <h1>Best DSA Learning Resources</h1>
      <ul>
        {resources.map(resource => (
          <li key={resource.id}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
