import './App.css';
import React, { useState, useEffect } from 'react';
import TodoList from './Todolist';

function getTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
}

function App() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage())
  const [idCount, setIdCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    event.preventDefault();
    const newTodoText = event.target.elements[0].value;
    const newTodo = { id: idCount, text: newTodoText, completed: false };
    setIdCount(idCount + 1);
    setTodos([...todos, newTodo]);
    event.target.reset();
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { id: todo.id, text: todo.text, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <form onSubmit={addTodo}>
        <input type="text" />
        <button>Add</button>
      </form>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
