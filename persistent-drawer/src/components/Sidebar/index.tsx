import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Drawer, IconButton, useTheme } from "@mui/material";
import { DRAWER_WIDTH, ISidebar } from "../../interface";
import { DrawerHeader, StyledDrawer } from "./styled";

export const Sidebar = ({ handleDrawerOpening, open }: ISidebar) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={StyledDrawer(DRAWER_WIDTH)}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerOpening}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </DrawerHeader>
    </Drawer>
  );
};
