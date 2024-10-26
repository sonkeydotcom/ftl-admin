// types.ts
export interface User {
  isAuthenticated: boolean;
}

export interface Bank {
  bank: string;
  accountNumber: string;
  accountHolder: string;
}

export interface AppContextValue {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  bank: Bank | null;
  setBank: React.Dispatch<React.SetStateAction<Bank | null>>;
}
