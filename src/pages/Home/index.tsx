import { FC } from "react";
import { Stack } from "@mui/material";
import MainWrapper from "../../common/containers/MainWrapper";
import { TodoList } from "../../components";

interface IHomePage {}

const HomePage: FC<IHomePage> = () => {
  return (
    <MainWrapper>
      <Stack alignItems="center" justifyContent={"center"}>
        <TodoList />
      </Stack>
    </MainWrapper>
  );
};

export default HomePage;
