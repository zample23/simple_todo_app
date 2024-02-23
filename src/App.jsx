import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import TodosContext from './context/TodosContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import './App.scss';

function App() {
  //THEME
  const [theme, setTheme] = useState('dark');

  //Theme changing
  const themeHandler = () => {
    setTheme(() => (theme === 'dark' ? 'light' : 'dark'));
  };

  //Theme body class updating
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  //Theme loading from localStorage
  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem('theme');
    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
    }
  }, []);

  //Theme saving in localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  //TODOS
  const [todos, setTodos] = useState([]);

  //ToDos loading from localStorage
  useEffect(() => {
    const arrayFromStorage = JSON.parse(localStorage.getItem('todos'));
    if (arrayFromStorage) {
      setTodos(arrayFromStorage);
    }
  }, []);

  //ToDos saving in localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // ToDos adding to the state
  const addTodoHandler = (text) =>
    setTodos([
      ...todos,
      {
        text,
        id: uuid(),
        isCompleted: false,
      },
    ]);

  // ToDos deleting from the state
  const deleteTodoHandler = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  // ToDos toggling the property isCompleted (making a todo done or undone)
  const toggleTodoHandler = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );

  return (
    <TodosContext.Provider
      value={{
        deleteTodo: deleteTodoHandler,
        toggleTodo: toggleTodoHandler,
      }}
    >
      <div className="App">
        <div className="container">
          <div className="todo-wrapper">
            <div className="title-toggle-wrapper">
              <h1 className="todo-title">Simple ToDo application</h1>
              <ThemeToggle themeHandler={themeHandler} theme={theme} />
            </div>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList todos={todos} />
          </div>
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
