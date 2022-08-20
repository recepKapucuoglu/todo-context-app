import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
