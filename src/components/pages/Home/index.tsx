import { FC } from "react";
import { Stack } from "@mui/material";
import PageWrapper from "../../../containers/PageWrapper";
import { TodoList } from "../../shared";

interface IHomePage {}

const HomePage: FC<IHomePage> = () => {
  return (
    <PageWrapper>
      <Stack alignItems="center" justifyContent={"center"}>
          <TodoList />
      </Stack>
    </PageWrapper>
  );
};

export default HomePage;
