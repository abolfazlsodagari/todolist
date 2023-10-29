import { FC } from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  // Getting Translation Object
  const { t } = useTranslation();

  return (
    <Stack
      sx={{
        background: (t) => t.palette.primary.dark,
        color: (t) => t.palette.common.white,
        padding: "25px 15px",
        textAlign: "center",
      }}
    >
      {t("todolist_app")}
    </Stack>
  );
};

export default Header;
