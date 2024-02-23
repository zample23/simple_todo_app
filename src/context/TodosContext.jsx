import { createContext } from 'react';

const TodosContext = createContext({
  deleteTodo: () => {},
  toggleTodo: () => {},
});

export default TodosContext;
