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
  const [categories, setCategories] = useState<CategoriesProps[] | null>(null);
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState("");

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post<User>("admin/login", {
        email,
        password,
      });
      console.log("User logged in:", response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.log("Error logging in:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createProduct = useCallback(async (data: Product) => {
    try {
      setIsLoading(true);

      // Prepare FormData with all product fields
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price.toString());
      formData.append("quantity", data.quantity.toString());
      formData.append("colors", data.colors); // Assuming `colors` is a string like "Red, Blue"
      formData.append("sizes", data.sizes); // Assuming `sizes` is a string like "S, M, L"
      formData.append("categoryId", data.categoryId); // Assuming `category` is the category ID
      if (data.files) {
        formData.append("files", data.files); // Add image file
      }

      // Make the POST request
      const response = await axiosInstance.post<Product>("products", formData);

      // Handle successful response (optional)
      console.log("Product created successfully:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error creating product:", error);
    } finally {
      // Always reset the loading state
      setIsLoading(false);
    }
  }, []);

  const updateOrderStatus = useCallback(
    async (orderId: number, status: string) => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.patch(`orders/admin/${orderId}`, {
          status,
        });
        console.log("Order status updated successfully:", response.data);
      } catch (error) {
        console.error("Error updating order status:", error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get<Product[]>("products");
      console.log("Fetched products:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateProduct = useCallback(async (id: number, product: Product) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.put(`products/${id}`, product);
      console.log("Product updated", response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteProduct = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.delete(`products/${id}`);
      console.log("Product deleted", response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchOrderDetail = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`orders/admin/${id}`);
      console.log("Fetched order details:", response.data);
      setOrderDetails(response.data);
    } catch (error) {
      console.error("Error fetching order details:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchOrders = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("orders");
      console.log("Fetched orders:", response.data);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axiosInstance.get("categories");
      console.log("Fetched categories", response.data);

      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  const contextValue: AppContextValue = {
    login,
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
    updateProduct,
    deleteProduct,
    updateOrderStatus,
    fetchOrders,
    orders,
    fetchProducts,
    products,
    fetchOrderDetail,
    orderDetails,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
