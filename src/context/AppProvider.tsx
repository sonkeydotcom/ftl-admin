// AppProvider.tsx
import React, { useState, type ReactNode } from "react";
import { AppContext } from "./context";
import type { User, Bank, AppContextValue } from "../types/types";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>({ isAuthenticated: false });
  const [bank, setBank] = useState<Bank | null>(null);

  const contextValue: AppContextValue = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    bank,
    setBank,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
