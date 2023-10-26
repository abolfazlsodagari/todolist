import { FC } from "react";
import { Stack } from "@mui/material";
import TodoListHeader from "./Header";
import TodoItems from "./TodoItems";
import TodoListProvider from "../../../context/TodoList/provider";

interface ITodoListProps {}

const TodoList: FC<ITodoListProps> = () => {
  return (
    <TodoListProvider>
      <Stack spacing={3} width="100%" alignItems={"center"} maxWidth="500px">
        {/* Header */}
        <TodoListHeader />
        {/* Todo Items */}
        <TodoItems />
      </Stack>
    </TodoListProvider>
  );
};

export default TodoList;
