import React, { useContext } from 'react';
import CrossIcon from '../assets/icon-cross.svg';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo = { id: '', text: 'testTodo' } }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo-item">
      <p className="todo-item__text">{todo.text}</p>
      <img src={CrossIcon} alt="remove" onClick={() => deleteTodo(todo.id)} />
    </div>
  );
};

export default TodoItem;
