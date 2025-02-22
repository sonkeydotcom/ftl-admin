// AppProvider.tsx
import React, { useState, useCallback, type ReactNode } from "react";
import { AppContext } from "./context";
import type {
  User,
  Bank,
  AppContextValue,
  Product,
  CategoriesProps,
  OrderDetails,
  Order,
  LoginResult,
  LoginError,
} from "../types/types";
import axiosInstance from "../lib/axiosInstance";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    isAuthenticated: false,
    email: "",
    password: "",
    token: "",
  });

  const [bank, setBank] = useState<Bank | null>(null);
  const [categories, setCategories] = useState<CategoriesProps[] | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    id: 0,
    userId: 0,
    createdAt: "",
    totalPrice: 0,
    paymentStatus: "",
    status: "",
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  // const login = useCallback(async (email: string, password: string) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axiosInstance.post<User>("admin/login", {
  //       email,
  //       password,
  //     });

  //     return { success: true, data: response.data };
  //   } catch (error) {
  //     console.log("Error logging in:", error);
  //     return { success: false, error };
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  const login = useCallback(
    async (email: string, password: string): Promise<LoginResult> => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.post<User>("/users/login", {
          email,
          password,
        });
        // localStorage.setItem("token", response.token);
        return { success: true, data: response.data };
      } catch (error) {
        console.error("Error logging in:", error);
        return { success: false, error: error as LoginError }; // Return an object with success: false on error
      } finally {
        setIsLoading(false);
      }
    },
    []
  );
  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get<Product[]>("/products");
      console.log("Fetched products:", response);
      setProducts(response?.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createProduct = useCallback(
    async (data: Product) => {
      try {
        setIsLoading(true);

        // Prepare FormData with all product fields
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price.toString());
        formData.append("stock", data.stock.toString());
        formData.append("colors", data.colors); // Assuming `colors` is a string like "Red, Blue"
        formData.append("sizes", data.sizes); // Assuming `sizes` is a string like "S, M, L"
        formData.append("category", data.category); // Assuming `category` is the category ID

        // if (data.images) {
        //   formData.append("images", data.images); // Add image file
        // }

        if (data.images && data.images.length > 0) {
          data.images.forEach((image, index) => {
            formData.append("images", image, `image-${index}`);
          });
        }

        // Make the POST request
        const response = await axiosInstance.post<Product>(
          "/admin/products/create",
          formData
        );

        // Handle successful response (optional)
        console.log("Product created successfully:", response.data);
        await fetchProducts();
        return { success: true };
      } catch (error) {
        // Handle errors
        console.error("Error creating product:", error);
        return { success: false };
      } finally {
        // Always reset the loading state
        setIsLoading(false);
      }
    },
    [fetchProducts]
  );

  const updateOrderStatus = useCallback(
    async (orderId: string, status: string) => {
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

  const updateProduct = useCallback(
    async (payLoad: Partial<Product>) => {
      setIsLoading(true);
      try {
        console.log("Updating product", payLoad);
        const response = await axiosInstance.put(
          `/admin/products/${payLoad.id}`,
          payLoad
        );
        console.log("Product updated", response.data);
        return { success: true, data: response.data };
      } catch (error) {
        console.log(error);
        await fetchProducts();
        return { success: false };
      } finally {
        setIsLoading(false);
      }
    },
    [fetchProducts]
  );

  const deleteProduct = useCallback(async (id: string) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.delete(`/admin/products/${id}`);
      console.log("Product deleted", response);
      return {
        success: true,
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
      };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchOrderDetail = useCallback(async (id: string) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/admin/orders/${id}`);
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
      const response = await axiosInstance.get("/admin/orders");
      console.log("Fetched orders:", response);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/categories");
      console.log("Fetched categories", response.data);

      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  const createCategory = useCallback(async (payLoad: CategoriesProps) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(
        "/admin/category/create",
        payLoad
      );
      console.log("Category created successfully:", response.data);
      return { success: true };
    } catch (error) {
      console.error("Error creating category:", error);
      return { success: false, error: error as LoginError };
    } finally {
      setIsLoading(false);
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
    createCategory,
    selectedOrder,
    setSelectedOrder,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
