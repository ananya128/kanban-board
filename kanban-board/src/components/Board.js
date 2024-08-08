import React, { useEffect } from 'react';
import dragula from 'dragula';
import 'dragula/dist/dragula.css';
import Column from './Column';

const Board = ({ columns, setColumns, emptyTrash }) => {
  useEffect(() => {
    const containers = columns.map(col => document.getElementById(col.id));
    dragula(containers, { removeOnSpill: false })
      .on('drop', (el, target, source, sibling) => {
        const taskId = el.innerText;
        const sourceId = source.id;
        const targetId = target.id;

        setColumns((prevColumns) => {
          const newColumns = prevColumns.map((col) => {
            if (col.id === sourceId) {
              return { ...col, tasks: col.tasks.filter(task => task !== taskId) };
            } else if (col.id === targetId) {
              return { ...col, tasks: [...col.tasks, taskId] };
            }
            return col;
          });
          return newColumns;
        });
      });
  }, [columns, setColumns]);

  return (
    <div className="main-container">
      <ul className="columns">
        {columns.map(column => (
          <Column key={column.id} column={column} emptyTrash={emptyTrash} />
        ))}
      </ul>
    </div>
  );
};

export default Board;
