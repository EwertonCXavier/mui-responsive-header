import { Logout, Settings } from "@mui/icons-material";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useCallback } from "react";
import { useValue } from "../../../context/ContextProvider";
import { IUserMenu } from "../../../interface";

export const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }: IUserMenu) => {
  const { dispatch } = useValue();

  const handleCloseUserMenu = useCallback(() => {
    setAnchorUserMenu(null);
  }, [setAnchorUserMenu]);

  return (
    <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={handleCloseUserMenu}
      onClick={handleCloseUserMenu}
    >
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem
        onClick={() =>
          dispatch?.({
            type: "UPDATE_USER",
            payload: {
              currentUser: undefined,
            },
          })
        }
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};
