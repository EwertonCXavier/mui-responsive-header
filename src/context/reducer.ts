import { IAction, IState } from "../interface";

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, currentUser: action.payload.currentUser };
    default:
      throw new Error("No matched action!");
  }
};
