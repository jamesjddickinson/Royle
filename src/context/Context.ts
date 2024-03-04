import { createContext, Dispatch, SetStateAction } from "react";
import { monarch } from "../types/types";
import { monarchs } from "../data/Monarchs";

interface CombinedContextProps {
  chosenMonarch: monarch;
  userGuesses: monarch[];
  setUserGuesses: Dispatch<SetStateAction<monarch[]>>;
  setChosenMonarch: Dispatch<SetStateAction<monarch>>;
}

const defaultMonarch: monarch = monarchs[0];
const defaultUserGuesses: monarch[] = [];

export const CombinedContext = createContext<CombinedContextProps>({
  chosenMonarch: defaultMonarch,
  userGuesses: defaultUserGuesses,
  setUserGuesses: () => {},
  setChosenMonarch: () => {}
});