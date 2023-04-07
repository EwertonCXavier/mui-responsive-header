import { createContext, useContext, useReducer } from "react";
import { ContextType, IContextProvider, initialState } from "../interface";
import { reducer } from "./reducer";

const Context = createContext<ContextType>({
  state: initialState,
  dispatch: null,
});

export const useValue = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }: IContextProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
