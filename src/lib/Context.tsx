import { useReducer, createContext, useContext } from "react";
import { State } from "@/types/Interfaces";
import { Action, GlobalContextType } from "@/types/Types";

const INITIAL_STATE: State = {
  id: "dnajkca_dacn",
  username: "Fandy",
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

const Reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case "SET_ID":
      return {
        ...state,
        id: payload.id,
      };
    case "SET_USERNAME":
      return {
        ...state,
        username: payload.username,
      };

    default:
      throw new Error(`${type} type is not define`);
  }
};

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useCtx = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return { state, dispatch };
};

export default GlobalProvider;
export { GlobalContext, useCtx };
