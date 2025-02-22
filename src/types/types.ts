// types.ts
export interface User {
  isAuthenticated: boolean;
  email: string;
  password: string;
  role?: string;
  token: string;
}

export interface Bank {
  bank: string;
  accountNumber: string;
  accountHolder: string;
}

export interface LoginError {
  data?: { message?: string };
  status?: number;
  statusText?: string;
}

export interface LoginResult {
  success: boolean;
  data?: User;
  error?: LoginError; // Now TypeScript knows `error` has `data.message`
}

// export interface LoginResult {
//   success: boolean;
//   data?: User; // Optional because it may not exist on failure
//   error?: unknown; // Optional because it may not exist on success
// }

export interface CategoriesProps {
  _id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderDetails {
  id: number;
  userId: number;
  createdAt: string;
  totalPrice: number;
  paymentStatus: string;
  status: string;
}

// interface Order {
//   id: number;
//   order?: string[];
// }

export interface Order {
  _id: string;
  image: string;
  title: string;
  totalAmount: number;
  quantity: number;
  category: string;
  status: string;
  totalPrice: number;
  createdAt: string;
  customerName: string;
  user: string;
}

export interface Product {
  id?: string;
  _id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;

  images: File[] | null;

  sizes: string;
  colors: string;
  category: string;
}

export interface AppContextValue {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  bank: Bank | null;
  setBank: React.Dispatch<React.SetStateAction<Bank | null>>;
  createProduct: (product: Product) => Promise<{
    success: boolean;
    error?: string;
  }>;
  fetchCategories: () => void;
  categories: CategoriesProps[] | null;
  selectedProduct: Product | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  updateProduct: (product: Partial<Product>) => Promise<{
    success: boolean;
    error?: string;
  }>;
  deleteProduct: (id: string) => Promise<{ success: boolean; error?: string }>;
  updateOrderStatus: (id: string, status: string) => void;
  fetchOrders: () => void;
  login: (email: string, password: string) => Promise<LoginResult>;
  orders: Order[];
  fetchProducts: () => void;
  products: Product[];
  createCategory: (
    category: CategoriesProps
  ) => Promise<{ success: boolean; error?: LoginError }>;

  setSelectedOrder: React.Dispatch<React.SetStateAction<string | null>>;
  selectedOrder: string | null;
  fetchOrderDetail: (id: string) => void;
  orderDetails: OrderDetails;
}
