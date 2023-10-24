import { FC, useState } from "react";
import { Stack } from "@mui/material";
import TodoListHeader from "./Header";
import TodoItems from "./TodoItems";
import { ITodoItem } from "./TodoItems/Item";
import { TodoListContext } from "../../../context";

interface ITodoListProps {
  items?: ITodoItem[];
}

const TodoList: FC<ITodoListProps> = () => {
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

  return (
    <TodoListContext.Provider
      value={{
        todoList: todoItems,
        addTodo: handleAddTodo,
        deleteTodo: handleDeleteTodo,
        editTodo: handleEditTodo,
        doneTodo: handleDoneTodo,
      }}
    >
      <Stack spacing={3} width="100%" alignItems={"center"} maxWidth="500px">
        {/* Header */}
        <TodoListHeader />
        {/* Todo Items */}
        <TodoItems />
      </Stack>
    </TodoListContext.Provider>
  );
};

export default TodoList;
