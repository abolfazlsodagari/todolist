import { FC, useContext, useState } from "react";
import { Stack, IconButton, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { ITodoItem } from ".";
import { TodoListContext } from "../../../../common/contexts";

interface IEditFormTodoItemProps {
  item: ITodoItem;
  setIsEdit: Function;
}

const EditFormTodoItem: FC<IEditFormTodoItemProps> = ({ item, setIsEdit }) => {
  // new text todo
  const [newTextTodo, setNewTextTodo] = useState<string>(item.text);
  // Getting edit todo From Todo List Context
  const { editTodo } = useContext(TodoListContext);

  return (
    <Stack
      component="form"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      spacing={2}
    >
      <Stack direction="row" alignItems="center" flexGrow={1}>
        <TextField
          defaultValue={item.text}
          size="small"
          onChange={(e) =>
            setNewTextTodo(e.target.value ? e.target.value : item.text)
          }
          fullWidth
          sx={{
            "& fieldset": {
              border: "none",
              borderBottom: "1px solid #00000010",
            },
          }}
        />
      </Stack>

      <Stack direction="row" alignItems={"center"}>
        <IconButton
          type="submit"
          size="small"
          color="primary"
          onClick={() => {
            editTodo(item.id, newTextTodo);
            setIsEdit(false);
          }}
        >
          <CheckIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default EditFormTodoItem;
