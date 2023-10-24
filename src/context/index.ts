import { createContext } from "react";
import { ITodoItem } from "../components/shared/TodoList/TodoItems/Item";

interface ITodoListContext {
  todoList: ITodoItem[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  doneTodo: (id: number) => void;
}

export const TodoListContext = createContext<ITodoListContext>({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  doneTodo: () => {},
});
