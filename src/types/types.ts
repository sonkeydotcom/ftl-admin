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
  id?: number;
  name: string;
  type: string;
  value: string;
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
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
  category: string;
  status: string;
  totalPrice: number;
  createdAt: string;
  customerName: string;
  userId: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  files: File | File[];
  category: string;
  sizes: string;
  colors: string;
  categoryId: string;
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
  updateProduct: (product: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  updateOrderStatus: (id: number, status: string) => void;
  fetchOrders: () => void;
  login: (email: string, password: string) => void;
  orders: Order[];
  fetchProducts: () => void;
  products: Product[];
  createCategory: (category: CategoriesProps) => void;
  setSelectedOrder: React.Dispatch<React.SetStateAction<string | null>>;
  fetchOrderDetail: (id: number) => void;
  orderDetails: OrderDetails;
}
