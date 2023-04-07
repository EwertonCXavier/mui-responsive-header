// Types for anchor element (UserMenu component)
export type ANCHOR_ELEMENT =
  | Element
  | ((element: Element) => Element)
  | null
  | undefined;

export interface IUserMenu {
  anchorUserMenu: ANCHOR_ELEMENT;
  setAnchorUserMenu: (value: ANCHOR_ELEMENT) => void;
}

// Type for the default structure of an user in the application
interface ICurrentUser {
  name: string;
  photoURL: string | undefined;
}

// Reducer types
export interface IState {
  currentUser: undefined | ICurrentUser;
}

export interface IAction {
  type: string;
  payload: IState;
}

export const initialState: IState = {
  currentUser: undefined,
};

// Context types
export interface IContextProvider {
  children: React.ReactNode;
}

export interface ContextType {
  state: IState;
  dispatch: React.Dispatch<IAction> | null;
}
