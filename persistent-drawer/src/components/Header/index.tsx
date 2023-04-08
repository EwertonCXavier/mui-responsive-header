import { Logout } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { IHeader } from "../../interface";
import { Sidebar } from "../Sidebar";
import { AppBar } from "./styled";

export const Header = ({ open, handleDrawerOpening, title }: IHeader) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpening}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Box>
        <Tooltip title="Logout" color="inherit">
          <IconButton>
            <Logout />
          </IconButton>
        </Tooltip>
      </Toolbar>
      {/* Sidebar component */}
      <Sidebar handleDrawerOpening={handleDrawerOpening} open={open} />
    </AppBar>
  );
};
