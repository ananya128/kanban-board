import React from 'react';
import Task from './Task';

const Column = ({ column, emptyTrash }) => (
  <li className={`column ${column.id}-column`}>
    <div className="column-header">
      <h4>{column.title}</h4>
    </div>
    <ul className="task-list" id={column.id}>
      {column.tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </ul>
    {column.id === 'trash' && (
      <div className="column-button">
        <button className="button delete-button" onClick={emptyTrash}>Delete</button>
      </div>
    )}
  </li>
);

export default Column;

