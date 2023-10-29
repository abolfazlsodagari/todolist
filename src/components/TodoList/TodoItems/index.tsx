import { FC, useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import TodoItem from "./Item";
import { TodoListContext } from "../../../common/contexts";

interface ITodoItemsProps {}

const TodoItems: FC<ITodoItemsProps> = () => {
  // Getting todo list items
  const { todoList } = useContext(TodoListContext);
  // Getting Translation Object
  const { t } = useTranslation();
  // not found items
  if (todoList.length <= 0) {
    return (
      <Stack alignItems="center" py={10}>
        <Typography variant="h6">{t("empty")}!</Typography>
      </Stack>
    );
  }

  return (
    <Stack width={"100%"}>
      {todoList.map((todo) => {
        return <TodoItem item={todo} key={todo.id} />;
      })}
    </Stack>
  );
};

export default TodoItems;
