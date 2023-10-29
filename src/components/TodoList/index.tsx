import { FC } from "react";
import { Stack } from "@mui/material";
import TodoListHeader from "./Header";
import TodoItems from "./TodoItems";

interface ITodoListProps {}

const TodoList: FC<ITodoListProps> = () => {
  return (
    <Stack spacing={3} width="100%" alignItems={"center"} maxWidth="500px">
      {/* Header */}
      <TodoListHeader />
      {/* Todo Items */}
      <TodoItems />
    </Stack>
  );
};

export default TodoList;
