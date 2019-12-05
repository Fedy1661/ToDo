import React from 'react';

import TodoListItem from '../TodoListItems/TodoListItem';
import './TodoList.css';

const TodoList = ({items, onDeleted, onToggleImportant, onToggleDone}) => {
  const elements = items.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <li className="list-group-item" key={id}>
        <TodoListItem onDeleted={() => onDeleted(id)} { ...itemProps } onToggleImportant={() => onToggleImportant(id)} onToggleDone={() => onToggleDone(id)}/>
      </li>
    )
  });
  return(
  <ul className="list-group TodoList">
    { elements }
  </ul>
  )
};

export default TodoList;