import { State } from "./Interfaces";

export type Action =
  | { type: "SET_ID"; payload: State }
  | { type: "SET_USERNAME"; payload: State };

export type GlobalContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
