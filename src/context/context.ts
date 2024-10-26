// context.ts
import { createContext } from "react";
import { AppContextValue } from "../types/types";

export const AppContext = createContext<AppContextValue | undefined>(undefined);
