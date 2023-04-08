import { Box, CssBaseline } from "@mui/material";
import * as React from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Header/styled";

interface IBaseLayout {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: IBaseLayout) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpening = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <Header
        handleDrawerOpening={handleDrawerOpening}
        open={open}
        title={"Gateway"}
      />
      <Main open={open}>{children}</Main>
    </Box>
  );
}
