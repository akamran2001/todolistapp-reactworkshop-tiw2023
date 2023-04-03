import React from 'react';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul>
        {todos.map((todo, index) => (
          <li key={todo.id} className={todo.completed ? 'completed':''}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
  );
}

export default TodoList;
