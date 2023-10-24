import { FC, useState } from "react";
import { Stack, alpha } from "@mui/material";
import EditFormTodoItem from "./Edit";
import TodoItemContent from "./content";

export interface ITodoItem {
  id: number;
  text: string;
  done: boolean;
}

interface ITodoItemProps {
  item: ITodoItem;
}

const TodoItem: FC<ITodoItemProps> = ({ item }) => {
  // is edit boolean state
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width={"100%"}
      spacing={0.5}
      sx={{
        borderBottom: "1px solid",
        borderColor: (t) => alpha(t.palette.primary.dark, 0.2),
        px: "5px",
        minHeight: "60px",
      }}
    >
      {isEdit ? (
        <EditFormTodoItem item={item} setIsEdit={setIsEdit} />
      ) : (
        <TodoItemContent item={item} setIsEdit={setIsEdit} />
      )}
    </Stack>
  );
};

export default TodoItem;
