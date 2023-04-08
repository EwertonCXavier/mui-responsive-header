import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
export const DRAWER_WIDTH = 240;

export interface ISidebar {
  handleDrawerOpening: () => void;
  open: boolean;
}

export interface IHeader {
  open: boolean;
  handleDrawerOpening: () => void;
  title: string;
}

export interface IMain {
  open?: boolean;
}

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
