import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        maxLength="12"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="New Task..."
      />
      <button className="button add-button" onClick={() => {
        addTask(taskText);
        setTaskText('');
      }}>Add New Task</button>
    </div>
  );
};

export default AddTask;
