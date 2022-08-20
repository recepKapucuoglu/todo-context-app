import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoInput = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText === '') return;
    addTodo(todoText);
    setTodoText('');
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please enter a new task"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
    </form>
  );
};

export default TodoInput;
