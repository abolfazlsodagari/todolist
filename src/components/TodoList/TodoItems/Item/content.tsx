import { FC, useContext } from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import CheckIcon from "@mui/icons-material/Check";
import { ITodoItem } from ".";
import { TodoListContext } from "../../../../common/contexts";

interface ITodoItemContentProps {
  item: ITodoItem;
  setIsEdit: Function;
}

const TodoItemContent: FC<ITodoItemContentProps> = ({ item, setIsEdit }) => {
  // Getting Actions From Todo List Context
  const { deleteTodo, doneTodo } = useContext(TodoListContext);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={
          item.done
            ? {
                textDecoration: "line-through",
                opacity: 0.5,
              }
            : {}
        }
      >
        <Typography>{`${item.text}`}</Typography>
      </Stack>

      <Stack direction="row" alignItems={"center"}>
        {/* edit action */}
        {!!!item.done && (
          <IconButton
            size="small"
            color={item.done ? "secondary" : "primary"}
            onClick={() => setIsEdit(true)}
          >
            <ModeEditOutlineIcon />
          </IconButton>
        )}

        {/* done action */}
        <IconButton
          size="small"
          color={item.done ? "secondary" : "primary"}
          onClick={() => doneTodo(item.id)}
        >
          <CheckIcon />
        </IconButton>

        {/* delete action */}
        <IconButton
          size="small"
          color="error"
          onClick={() => deleteTodo(item.id)}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default TodoItemContent;
