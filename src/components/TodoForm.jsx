import { useState } from 'react';
import { MdOutlineClear } from 'react-icons/md';
import './TodoForm.scss';

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
      />
      <MdOutlineClear className="todo-form-clear" onClick={() => setText('')} />
      <button className="todo-button" type="submit" title="Add your task">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
