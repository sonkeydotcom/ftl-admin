// hooks.ts
import { useContext } from "react";
import { AppContext } from "../context/context";
import type { AppContextValue } from "../types/types";

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
