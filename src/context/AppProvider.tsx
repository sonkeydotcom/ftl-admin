// AppProvider.tsx
import React, { useState, useCallback, type ReactNode } from "react";
import { AppContext } from "./context";
import type {
  User,
  Bank,
  AppContextValue,
  Product,
  CategoriesProps,
} from "../types/types";
import axiosInstance from "../lib/axiosInstance";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>({ isAuthenticated: false });
  const [bank, setBank] = useState<Bank | null>(null);
  const [categories, setCategories] = useState<CategoriesProps | null>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // const [products, setProducts] = useState<Product[]>([]);

  const createProduct = useCallback(async (data: Product) => {
    // Create a new product and update the state
    try {
      setIsLoading(true);
      const response = await axiosInstance.post<Product>("products", data);

      if (!response) {
        throw new Error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axiosInstance.get("categories");

      setCategories(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  const contextValue: AppContextValue = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    bank,
    setBank,
    createProduct,
    fetchCategories,
    categories,
    selectedProduct,
    setSelectedProduct,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
