import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const arrayFromStorage = JSON.parse(localStorage.getItem('todos'));
    if (arrayFromStorage) {
      setTodos(arrayFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text) =>
    setTodos([
      ...todos,
      {
        text,
        id: uuid(),
        isCompleted: false,
      },
    ]);

  const deleteTodoHandler = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const toggleTodoHandler = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );

  return (
    <div className="App">
      <div className="container">
        <div className="todo-wrapper">
          <h1 className="todo-title">Simple ToDo application</h1>
          <TodoForm addTodo={addTodoHandler} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodoHandler}
            toggleTodo={toggleTodoHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
