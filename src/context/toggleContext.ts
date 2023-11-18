import { createContext } from "react";

interface MyContextProps {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}
export const ToggleContext = createContext<MyContextProps | undefined>(
  undefined
);
