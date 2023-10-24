import { ReactNode, FC } from "react";
import { Stack } from "@mui/material";
import { Header } from "../../components/shared";

interface IPageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<IPageWrapperProps> = ({ children }) => {
  return (
    <Stack spacing={2}>
      {/* Main Header */}
      <Header />
      {/* Children */}
      <div style={{ minHeight: "80vh" }}>{children}</div>
    </Stack>
  );
};

export default PageWrapper;
