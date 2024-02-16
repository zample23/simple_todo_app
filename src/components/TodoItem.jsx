import { FaCheck } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import './TodoItem.scss';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <FaCheck className="todo-check" />
      <span className="todo-text">{todo.text}</span>
      <TiDelete className="todo-delete" onClick={() => deleteTodo(todo.id)} />
    </div>
  );
};

export default TodoItem;
