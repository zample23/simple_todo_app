import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) =>
    setTodos([
      ...todos,
      {
        text: text,
        id: uuid(),
        isCompleted: false,
      },
    ]);

  const deleteTodoHandler = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="App">
      <div className="container">
        <div className="todo-wrapper">
          <h1 className="todo-title">Simple ToDo application</h1>
          <TodoForm addTodo={addTodoHandler} />
          <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
