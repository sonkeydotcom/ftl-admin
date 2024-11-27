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
  categories: CategoriesProps[] | null;
  selectedProduct: Product | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  updateProduct: (id: number, product: Product) => void;
  deleteProduct: (id: number) => void;
  updateOrderStatus: (id: number, status: string) => void;
  fetchOrders: () => void;
  login: (email: string, password: string) => void;
  orders: string[] | null;
  fetchProducts: () => void;
  products: Product[];
  createCategory: (category: CategoriesProps) => void;
  setSelectedorder: React.Dispatch<React.SetStateAction<string[] | null>>;
  fetchOrderDetail: (id: number) => void;
  orderDetails: OrderDetail | null;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  files: string;
  category: string;
  sizes: string;
  colors: string;
  categoryId: string;
}
