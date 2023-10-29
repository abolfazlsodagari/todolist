import { FC, useState } from "react";
import { ITodoItem } from "../../../components/TodoList/TodoItems/Item";
import TodoListContext from ".";

interface ITodoListProvider {
  children: React.ReactNode;
}

const TodoListProvider: FC<ITodoListProvider> = ({ children }) => {
  // Todo Items
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  // handle Add Todo
  const handleAddTodo = (text: string) => {
    setTodoItems((oldTodos: ITodoItem[]) => {
      return [
        ...oldTodos,
        {
          id: ++todoItems.length,
          text,
          done: false,
        },
      ];
    });
  };

  // handle delete todo
  const handleDeleteTodo = (id: number) => {
    setTodoItems((todos) => todos.filter((todo: ITodoItem) => todo.id !== id));
  };

  // handle edit todo
  const handleEditTodo = (id: number, newText: string) => {
    setTodoItems((todos: ITodoItem[]) =>
      todos.filter((todo) => {
        if (todo.id === id) {
          todo.text = newText;
        }
        return todos;
      })
    );
  };

  // handle edit todo
  const handleDoneTodo = (id: number) => {
    setTodoItems((todos) =>
      todos.filter((todo: ITodoItem) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todos;
      })
    );
  };

  // todo list context value
  const contextValue = {
    todoList: todoItems,
    addTodo: handleAddTodo,
    deleteTodo: handleDeleteTodo,
    editTodo: handleEditTodo,
    doneTodo: handleDoneTodo,
  };

  return (
    <TodoListContext.Provider value={contextValue}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
