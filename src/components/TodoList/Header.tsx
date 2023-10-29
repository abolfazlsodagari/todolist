import { FC, useContext } from "react";
import { Stack, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { TodoListContext } from "../../common/contexts";

interface ITodoListHeaderProps {}

const TodoListHeader: FC<ITodoListHeaderProps> = () => {
  // Getting add todo actions from context
  const { addTodo } = useContext(TodoListContext);
  // Getting Translation
  const { t } = useTranslation();
  // form validation
  const { handleSubmit, getFieldProps, errors } = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: Yup.object().shape({
      text: Yup.string().required("Please Add Todo"),
    }),
    onSubmit: (values) => {
      addTodo(values.text);
      values.text = "";
    },
  });

  return (
    <Stack
      component="form"
      direction="row"
      spacing={2}
      onSubmit={handleSubmit}
      alignItems={"start"}
    >
      {/* TextField For Add Todo */}
      <TextField
        type="text"
        color="primary"
        placeholder={t("add_todo")}
        error={Boolean(errors.text)}
        helperText={errors.text}
        {...getFieldProps("text")}
      />
      {/* Submit Button Add Todo */}
      <Button
        type="submit"
        variant="contained"
        sx={{
          background: (t) => t.palette.primary.dark,
          color: (t) => t.palette.common.white,
          py: "15.5px",
        }}
      >
        {t("add")}
      </Button>
    </Stack>
  );
};

export default TodoListHeader;
