import { createContext, useContext } from "react";

export const KeyboardContext = createContext();

export const useKeyBoardContext = () => {
  return useContext(KeyboardContext);
};

export const color = {
  0: "blue",
  1: "brown",
};
