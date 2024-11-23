// types.ts
export interface User {
  isAuthenticated: boolean;
}

export interface Bank {
  bank: string;
  accountNumber: string;
  accountHolder: string;
}

export interface CategoriesProps {
  id: number;
  name: string;
  type: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AppContextValue {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  bank: Bank | null;
  setBank: React.Dispatch<React.SetStateAction<Bank | null>>;
  createProduct: (product: Product) => void;
  fetchCategories: () => void;
  categories: CategoriesProps[];
  selectedProduct: Product | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

export interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
}
