import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Board from './components/Board';
import Footer from './components/Footer';
import './App.css';
import './themes.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [columns, setColumns] = useState([
    { id: 'to-do', title: 'To Do', tasks: ['Analysis', 'Coding', 'Card Sorting', 'Measure'] },
    { id: 'doing', title: 'Doing', tasks: ['Hypothesis', 'User Testing', 'Prototype'] },
    { id: 'done', title: 'Done', tasks: ['Ideation', 'Sketches'] },
    { id: 'trash', title: 'Trash', tasks: ['Interviews', 'Research'] },
  ]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const addTask = (task) => {
    const newColumns = columns.map((col) => {
      if (col.id === 'to-do') {
        return { ...col, tasks: [...col.tasks, task] };
      }
      return col;
    });
    setColumns(newColumns);
  };

  const emptyTrash = () => {
    const newColumns = columns.map((col) => {
      if (col.id === 'trash') {
        return { ...col, tasks: [] };
      }
      return col;
    });
    setColumns(newColumns);
  };

  return (
    <div className={`App ${theme}`}>
      <div className="header-container">
        <Header />
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
          <span className="slider"></span>
          <br></br>
          <br></br>
          <b>MODE</b>
        </label>
      </div>
      <AddTask addTask={addTask} />
      <Board columns={columns} emptyTrash={emptyTrash} />
      <Footer />
    </div>
  );
};

export default App;
