import './TodoForm.scss';
import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (text) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form className="todo-form" onSubmit={addTodoHandler}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Write down your task"
      ></input>
      <button className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
