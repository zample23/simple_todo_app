import { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import TodosContext from '../context/TodosContext';
import './TodoItem.scss';

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useContext(TodosContext);
  return (
    <div
      className={`${todo.isCompleted ? 'todo-item todo-done' : 'todo-item'}`}
    >
      <FaCheck
        className="todo-check"
        title="Finish this task"
        onClick={() => toggleTodo(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      <TiDelete
        className="todo-delete"
        onClick={() => deleteTodo(todo.id)}
        title="Delete this task"
      />
    </div>
  );
};

export default TodoItem;
