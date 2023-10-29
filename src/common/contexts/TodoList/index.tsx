import { createContext } from "react";
import { ITodoItem } from "../../../components/TodoList/TodoItems/Item";

interface ITodoListContext {
  todoList: ITodoItem[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  doneTodo: (id: number) => void;
}

const TodoListContext = createContext<ITodoListContext>({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  doneTodo: () => {},
});

export default TodoListContext;
